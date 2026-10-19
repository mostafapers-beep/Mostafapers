/* Horizon Properties — scroll-driven hero video (scrubbing, never playback)
 * ---------------------------------------------------------------------------
 * The scroll position drives the video TIMELINE; the video is never played.
 *
 *   scroll event (passive)  ->  target progress only
 *   requestAnimationFrame   ->  ease current time toward target, then seek
 *   video.seeked            ->  unlock the next seek
 *
 * Why it stays smooth:
 *   - the hero is pinned with position:sticky inside a tall .hero-scroll
 *     section, so no layout work happens while scrolling;
 *   - the section's geometry is measured once (load/resize), never per scroll;
 *   - currentTime is written at most once per decoded frame, never per event,
 *     and only when the new time differs meaningfully from the last seek;
 *   - the file is fully downloaded into a Blob before scrubbing starts, so
 *     every seek is local and never waits on the network.
 *
 * Encoding notes (this source is H.264/MP4 with the moov atom at the front,
 * so metadata is available immediately — good):
 *   - frequent keyframes matter most for scrubbing: a GOP of ~1s (ideally
 *     keyframe every 24-30 frames, B-frames disabled) makes random seeking
 *     fast and exact;
 *   - keep the bitrate moderate and the resolution at most 1080p;
 *   - a WebM/VP9 (or AV1) rendition can be added as a second <source> for
 *     browsers that seek it faster, and a lighter mobile rendition can be
 *     swapped in for narrow viewports — the markup supports both.
 */
(function () {
  "use strict";

  var section = document.querySelector(".hero-scroll");
  var hero = document.querySelector(".hero");
  var video = document.getElementById("heroVideo");
  var loading = document.getElementById("heroLoading");
  var loadingBar = document.getElementById("heroLoadingBar");
  var content = document.querySelector(".hero-content");
  var note = document.querySelector(".hero-note");

  if (!section || !hero || !video) return;

  var VIDEO_SRC = "assets/hero.mp4";
  var SMOOTHING = 0.18;     // easing toward the scroll target, per frame
  var MIN_DELTA = 1 / 60;   // ignore sub-frame changes (seek flood guard)
  var SEEK_TIMEOUT = 600;   // ms — watchdog so the rAF loop can never stall
  var FADE_END = 0.18;      // hero copy has faded out by 18% of the scroll

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  var duration = 0;
  var sectionTop = 0;
  var scrollDistance = 1;
  var targetProgress = 0;
  var smoothTime = 0;
  var lastWritten = 0;
  var seeking = false;
  var seekStartedAt = 0;
  var rafId = null;
  var ready = false;
  var textAlpha = -1;

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  function schedule() {
    if (rafId === null) rafId = requestAnimationFrame(tick);
  }

  /* Geometry is read once per layout change, never inside the scroll handler. */
  function measure() {
    sectionTop = section.getBoundingClientRect().top + window.scrollY;
    scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
  }

  function readProgress() {
    targetProgress = clamp01((window.scrollY - sectionTop) / scrollDistance);
  }

  function onScroll() {
    readProgress();
    schedule();
  }

  function applyTextFade(progress) {
    var alpha = 1 - clamp01(progress / FADE_END);
    if (Math.abs(alpha - textAlpha) < 0.01) return;
    textAlpha = alpha;
    content.style.opacity = alpha.toFixed(3);
    content.style.transform = "translate3d(0," + ((1 - alpha) * -36).toFixed(2) + "px,0)";
    note.style.opacity = alpha.toFixed(3);
  }

  function tick() {
    rafId = null;
    if (!ready || duration <= 0) return;

    var target = targetProgress * duration;
    smoothTime += (target - smoothTime) * SMOOTHING;
    if (Math.abs(target - smoothTime) < 0.002) smoothTime = target;

    if (seeking && performance.now() - seekStartedAt > SEEK_TIMEOUT) seeking = false;

    if (!seeking && Math.abs(smoothTime - lastWritten) >= MIN_DELTA) {
      seeking = true;
      seekStartedAt = performance.now();
      lastWritten = smoothTime;
      try { video.currentTime = smoothTime; } catch (err) { seeking = false; }
    }

    applyTextFade(targetProgress);

    if (seeking || Math.abs(target - smoothTime) > 0.002) schedule();
  }

  function setLoadProgress(ratio) {
    if (ratio === null) { loading.classList.add("indeterminate"); return; }
    loadingBar.style.transform = "scaleX(" + clamp01(ratio).toFixed(3) + ")";
  }

  function onMetadata() {
    duration = video.duration || 0;
    if (!isFinite(duration) || duration <= 0) { fail(); return; }
    ready = true;
    seeking = false;
    smoothTime = targetProgress * duration;   // restores position after a reload
    lastWritten = smoothTime;
    hero.classList.add("ready");
    hero.classList.remove("failed");
    schedule();
  }

  function fail() {
    ready = false;
    hero.classList.add("failed");
    hero.classList.remove("ready");
  }

  /* Download the whole file first: a Blob source makes every seek local. */
  function preloadVideo() {
    setLoadProgress(0);
    fetch(VIDEO_SRC, { cache: "force-cache" })
      .then(function (response) {
        if (!response.ok || !response.body || !response.body.getReader) {
          throw new Error("stream unavailable");
        }
        var total = Number(response.headers.get("content-length")) || 0;
        var reader = response.body.getReader();
        var chunks = [];
        var received = 0;

        function pump() {
          return reader.read().then(function (step) {
            if (step.done) {
              video.src = URL.createObjectURL(new Blob(chunks, { type: "video/mp4" }));
              video.load();
              return;
            }
            chunks.push(step.value);
            received += step.value.length;
            setLoadProgress(total ? received / total : null);
            return pump();
          });
        }
        return pump();
      })
      .catch(function () {
        // Direct source fallback — the browser buffers whatever it can.
        video.src = VIDEO_SRC;
        video.load();
      });
  }

  function init() {
    measure();
    readProgress();

    if (reduceMotion.matches) {
      document.documentElement.classList.add("hero-reduced");
      return;   // static hero image, no cinematic scroll
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () { measure(); readProgress(); schedule(); }, { passive: true });
    window.addEventListener("orientationchange", function () {
      setTimeout(function () { measure(); readProgress(); schedule(); }, 200);
    });
    window.addEventListener("load", function () { measure(); readProgress(); schedule(); });

    video.addEventListener("loadedmetadata", onMetadata);
    video.addEventListener("error", fail);
    video.addEventListener("seeked", function () { seeking = false; schedule(); });
    video.addEventListener("play", function () { video.pause(); });   // never plays

    // The entry animation would outrank our inline styles — drop it once done.
    content.addEventListener("animationend", function () { content.style.animation = "none"; });

    preloadVideo();
    schedule();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
