/* Horizon Properties — landing page interactions */

const UNSPLASH = (id, w) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const PROPERTIES = [
  {
    id: "lakeside-modern-villa",
    title: "Lakeside Modern Villa",
    location: "Austin, Texas, USA",
    region: "Texas",
    price: "$2.35 Million",
    priceValue: 2.35,
    type: "Villa",
    status: "For Sale",
    beds: 5,
    baths: 4,
    area: "4,200 sq ft",
    featured: true,
    image: "photo-1613490493576-7fde63acd811",
    gallery: ["photo-1613490493576-7fde63acd811", "photo-1600607687939-ce8a6c25118c", "photo-1600566753086-00f18fb6b3ea"],
    description:
      "A light-filled contemporary villa set on a quiet lakeside plot, with floor-to-ceiling glazing, an infinity pool and uninterrupted water views from every principal room.",
    features: ["Infinity pool", "Private mooring", "Double garage", "Smart home system", "Landscaped garden", "Guest suite"],
    agent: { name: "Amelia Hart", role: "Principal Broker", phone: "(555) 246-7890", email: "amelia@horizonproperties.com" }
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    location: "Manhattan, New York, USA",
    region: "New York",
    price: "$4.80 Million",
    priceValue: 4.8,
    type: "Penthouse",
    status: "For Sale",
    beds: 4,
    baths: 3,
    area: "3,100 sq ft",
    featured: true,
    image: "photo-1512917774080-9991f1c4c750",
    gallery: ["photo-1512917774080-9991f1c4c750", "photo-1600210492486-724fe5c67fb0", "photo-1600047509807-ba8f99d2cdde"],
    description:
      "Full-floor penthouse with a wraparound terrace, panoramic skyline outlook and a private elevator lobby, moments from the park.",
    features: ["Private lift", "Wraparound terrace", "Concierge", "Wine room", "Gym access", "Two parking bays"],
    agent: { name: "Daniel Okafor", role: "Investment Director", phone: "(555) 246-7891", email: "daniel@horizonproperties.com" }
  },
  {
    id: "sunset-ridge-estate",
    title: "Sunset Ridge Estate",
    location: "Malibu, California, USA",
    region: "California",
    price: "$6.10 Million",
    priceValue: 6.1,
    type: "Estate",
    status: "For Sale",
    beds: 6,
    baths: 5,
    area: "5,400 sq ft",
    featured: true,
    image: "photo-1523217582562-09d0def993a6",
    gallery: ["photo-1523217582562-09d0def993a6", "photo-1600607687920-4e2a09cf159d", "photo-1600566753190-17f0baa2a6c3"],
    description:
      "A gated hillside estate facing the Pacific, with a resort-style pool deck, home cinema and a separate guest house.",
    features: ["Ocean views", "Home cinema", "Guest house", "Pool & spa", "Gated entry", "Four-car garage"],
    agent: { name: "Sofia Marchetti", role: "Head of Sales", phone: "(555) 246-7892", email: "sofia@horizonproperties.com" }
  },
  {
    id: "garden-courtyard-home",
    title: "Garden Courtyard Home",
    location: "Portland, Oregon, USA",
    region: "Oregon",
    price: "$1.28 Million",
    priceValue: 1.28,
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 3,
    area: "2,600 sq ft",
    featured: true,
    image: "photo-1568605114967-8130f3a36994",
    gallery: ["photo-1568605114967-8130f3a36994", "photo-1600585154340-be6161a56a0c", "photo-1600607687939-ce8a6c25118c"],
    description:
      "A warm, architect-designed family home wrapped around a planted courtyard, with a studio outbuilding and generous storage throughout.",
    features: ["Courtyard garden", "Studio outbuilding", "Heat pump", "Walkable district", "EV charger", "Solar panels"],
    agent: { name: "James Whitfield", role: "Client Advisor", phone: "(555) 246-7893", email: "james@horizonproperties.com" }
  },
  {
    id: "harbour-view-apartment",
    title: "Harbour View Apartment",
    location: "Miami, Florida, USA",
    region: "Florida",
    price: "$980 Thousand",
    priceValue: 0.98,
    type: "Apartment",
    status: "For Sale",
    beds: 3,
    baths: 2,
    area: "1,750 sq ft",
    image: "photo-1580587771525-78b9dba3b914",
    gallery: ["photo-1580587771525-78b9dba3b914", "photo-1600210492486-724fe5c67fb0", "photo-1600047509807-ba8f99d2cdde"],
    description:
      "A bright corner apartment overlooking the marina, with a deep balcony, resort amenities and direct beach access.",
    features: ["Marina views", "Beach access", "Pool deck", "24h security", "Fitted kitchen", "Storage locker"],
    agent: { name: "Amelia Hart", role: "Principal Broker", phone: "(555) 246-7890", email: "amelia@horizonproperties.com" }
  },
  {
    id: "cedar-hills-townhouse",
    title: "Cedar Hills Townhouse",
    location: "Denver, Colorado, USA",
    region: "Colorado",
    price: "$760 Thousand",
    priceValue: 0.76,
    type: "Townhouse",
    status: "For Sale",
    beds: 3,
    baths: 2,
    area: "1,600 sq ft",
    image: "photo-1570129477492-45c003edd2be",
    gallery: ["photo-1570129477492-45c003edd2be", "photo-1600566753086-00f18fb6b3ea", "photo-1600607687920-4e2a09cf159d"],
    description:
      "A low-maintenance townhouse with mountain outlooks, a private roof terrace and quick access to the trail network.",
    features: ["Roof terrace", "Mountain views", "Garage", "Underfloor heating", "Trail access", "Low service charge"],
    agent: { name: "James Whitfield", role: "Client Advisor", phone: "(555) 246-7893", email: "james@horizonproperties.com" }
  },
  {
    id: "lakeshore-loft",
    title: "Lakeshore Loft",
    location: "Chicago, Illinois, USA",
    region: "Illinois",
    price: "$5,400 / month",
    priceValue: 0.0054,
    type: "Loft",
    status: "For Rent",
    beds: 2,
    baths: 2,
    area: "1,320 sq ft",
    image: "photo-1600566753190-17f0baa2a6c3",
    gallery: ["photo-1600566753190-17f0baa2a6c3", "photo-1600607687939-ce8a6c25118c", "photo-1600585154340-be6161a56a0c"],
    description:
      "An industrial-chic loft with exposed brick, double-height windows and a private terrace above the lakefront.",
    features: ["Double-height windows", "Private terrace", "Pet friendly", "Doorman", "Bike store", "Furnished option"],
    agent: { name: "Sofia Marchetti", role: "Head of Sales", phone: "(555) 246-7892", email: "sofia@horizonproperties.com" }
  },
  {
    id: "olive-grove-residence",
    title: "Olive Grove Residence",
    location: "Napa Valley, California, USA",
    region: "California",
    price: "$3.40 Million",
    priceValue: 3.4,
    type: "Villa",
    status: "For Sale",
    beds: 4,
    baths: 4,
    area: "3,600 sq ft",
    image: "photo-1600596542815-ffad4c1539a9",
    gallery: ["photo-1600596542815-ffad4c1539a9", "photo-1600047509807-ba8f99d2cdde", "photo-1600210492486-724fe5c67fb0"],
    description:
      "A stone-and-timber villa among mature olive groves, with a vine-covered pergola, tasting room and pool.",
    features: ["Olive grove", "Tasting room", "Pergola dining", "Pool", "Barn", "Vineyard views"],
    agent: { name: "Daniel Okafor", role: "Investment Director", phone: "(555) 246-7891", email: "daniel@horizonproperties.com" }
  }
];

const SERVICES = [
  { n: "01", title: "Residential Sales", text: "Discreet marketing and skilled negotiation for homes at every price point, from first purchases to landmark estates." },
  { n: "02", title: "Investment Advisory", text: "Yield modelling, portfolio structuring and off-market access for buyers building long-term property wealth." },
  { n: "03", title: "Property Management", text: "Tenant sourcing, maintenance and rent collection, so your asset performs without the day-to-day burden." },
  { n: "04", title: "Mortgage & Finance", text: "Independent lending introductions and structured finance for domestic and international purchasers." },
  { n: "05", title: "Interior Styling", text: "Presentation, staging and renovation guidance that lifts both the sale price and the daily enjoyment of a home." },
  { n: "06", title: "Market Valuation", text: "Evidence-based appraisals with a clear view of current demand, comparable sales and realistic timing." }
];

const TEAM = [
  { name: "Amelia Hart", role: "Principal Broker", photo: "photo-1573496359142-b8d87734a5a2" },
  { name: "Daniel Okafor", role: "Investment Director", photo: "photo-1560250097-0b93528c311a" },
  { name: "Sofia Marchetti", role: "Head of Sales", photo: "photo-1580489944761-15a19d654956" },
  { name: "James Whitfield", role: "Client Advisor", photo: "photo-1507003211169-0a1dd7228f2d" }
];

const PIN_SVG =
  '<svg class="pin" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ---------- toast ---------- */
let toastTimer;
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

/* ---------- header ---------- */
function initHeader() {
  const header = $("#siteHeader");
  const navLinks = $("#navLinks");
  const toggle = $("#menuToggle");

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  $$("#navLinks a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  const sections = $$("main section[id]");
  const navMap = new Map($$("#navLinks a").map((a) => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const link = navMap.get(entry.target.id);
        if (!link) return;
        $$("#navLinks a").forEach((a) => a.classList.remove("active"));
        link.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ---------- reveal on scroll ---------- */
function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- featured carousel ---------- */
function propertyCard(p) {
  const card = document.createElement("article");
  card.className = "property-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${p.title}, ${p.location}, ${p.price}`);
  card.dataset.id = p.id;
  card.innerHTML = `
    <div class="card-image"><img src="${UNSPLASH(p.image, 900)}" alt="${p.title}"></div>
    <div class="property-meta">
      <span class="card-type">${p.status} &middot; ${p.type}</span>
      <h3>${p.title}</h3>
      <div class="meta-row">
        <span class="location">${PIN_SVG}${p.location}</span>
        <span class="price">${p.price}</span>
      </div>
    </div>`;
  return card;
}

function initFeatured() {
  const track = $("#propertyTrack");
  PROPERTIES.filter((p) => p.featured).forEach((p) => track.appendChild(propertyCard(p)));

  const step = () => Math.max(260, track.clientWidth / 3.2 + 12);
  $$("[data-carousel]").forEach((btn) =>
    btn.addEventListener("click", () => {
      track.scrollBy({ left: btn.dataset.carousel === "next" ? step() : -step(), behavior: "smooth" });
    })
  );

  let dragging = false, startX = 0, startScroll = 0;
  track.addEventListener("pointerdown", (e) => {
    dragging = true; startX = e.clientX; startScroll = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  });
  track.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    track.scrollLeft = startScroll - (e.clientX - startX);
  });
  const endDrag = () => { dragging = false; };
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointercancel", endDrag);
}

/* ---------- browse / filters ---------- */
function resultCard(p) {
  const card = document.createElement("article");
  card.className = "result-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${p.title}, ${p.location}, ${p.price}`);
  card.dataset.id = p.id;
  card.innerHTML = `
    <div class="result-img">
      <img src="${UNSPLASH(p.image, 700)}" alt="${p.title}">
      <button class="favorite" type="button" aria-label="Save ${p.title}" aria-pressed="false">&#9825;</button>
    </div>
    <div class="result-copy">
      <h3>${p.title}</h3>
      <span class="result-location">${p.location}</span>
      <div class="result-bottom">
        <strong>${p.price}</strong>
        <span>${p.beds} bd &middot; ${p.baths} ba &middot; ${p.area}</span>
      </div>
    </div>`;
  return card;
}

function initBrowse() {
  const grid = $("#resultsGrid");
  const count = $("#resultsCount");
  const locationSel = $("#searchLocation");
  const typeSel = $("#searchType");
  const bedsSel = $("#searchBeds");
  const priceSel = $("#searchPrice");
  const reset = $("#searchReset");

  [...new Set(PROPERTIES.map((p) => p.region))].sort().forEach((r) => {
    locationSel.insertAdjacentHTML("beforeend", `<option value="${r}">${r}</option>`);
  });
  [...new Set(PROPERTIES.map((p) => p.type))].sort().forEach((t) => {
    typeSel.insertAdjacentHTML("beforeend", `<option value="${t}">${t}</option>`);
  });

  function render() {
    const region = locationSel.value;
    const type = typeSel.value;
    const beds = Number(bedsSel.value || 0);
    const range = priceSel.value;
    const [min, max] = range ? range.split("-").map(Number) : [0, Infinity];

    const matches = PROPERTIES.filter(
      (p) =>
        (!region || p.region === region) &&
        (!type || p.type === type) &&
        (!beds || p.beds >= beds) &&
        p.priceValue >= min &&
        p.priceValue <= max
    );

    grid.innerHTML = "";
    if (!matches.length) {
      grid.innerHTML = `<div class="empty-state"><p>No properties match your search.</p><button class="btn btn-outline" type="button" id="emptyReset">Clear filters</button></div>`;
      $("#emptyReset").addEventListener("click", resetFilters);
    } else {
      matches.forEach((p) => grid.appendChild(resultCard(p)));
    }
    count.textContent = `${matches.length} ${matches.length === 1 ? "property" : "properties"} found`;
  }

  function resetFilters() {
    locationSel.value = "";
    typeSel.value = "";
    bedsSel.value = "";
    priceSel.value = "";
    render();
  }

  [locationSel, typeSel, bedsSel, priceSel].forEach((el) => el.addEventListener("change", render));
  reset.addEventListener("click", resetFilters);
  render();
}

/* ---------- services & team ---------- */
function initServices() {
  const grid = $("#servicesGrid");
  SERVICES.forEach((s) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `<article class="service"><span class="service-num">${s.n}</span><div><h3>${s.title}</h3><p>${s.text}</p></div></article>`
    );
  });
}

function initTeam() {
  const grid = $("#teamGrid");
  TEAM.forEach((m) => {
    grid.insertAdjacentHTML(
      "beforeend",
      `<article class="team-card">
        <div class="portrait"><img src="${UNSPLASH(m.photo, 600)}" alt="${m.name}"></div>
        <h3>${m.name}</h3>
        <p>${m.role}</p>
        <div class="team-links"><a href="#contact">Profile</a><a href="#contact">Contact</a></div>
      </article>`
    );
  });
}

/* ---------- modal ---------- */
const backdrop = $("#modalBackdrop");
const modalContent = $("#modalContent");

function openModal(html) {
  modalContent.innerHTML = html;
  backdrop.classList.add("open");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeModal() {
  backdrop.classList.remove("open");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  modalContent.innerHTML = "";
}

function propertyModal(p) {
  const [a, b, c] = p.gallery;
  return `
    <div class="detail-gallery">
      <div class="detail-main"><img src="${UNSPLASH(a, 1200)}" alt="${p.title}" data-zoom="${UNSPLASH(a, 1800)}"></div>
      <div class="detail-thumbs">
        <img src="${UNSPLASH(b, 700)}" alt="${p.title} interior" data-zoom="${UNSPLASH(b, 1600)}">
        <img src="${UNSPLASH(c, 700)}" alt="${p.title} detail" data-zoom="${UNSPLASH(c, 1600)}">
      </div>
    </div>
    <div class="detail-heading">
      <div>
        <h2>${p.title}</h2>
        <p class="detail-loc">${PIN_SVG} ${p.location} &middot; ${p.status}</p>
      </div>
      <div class="detail-price">${p.price}</div>
    </div>
    <div class="detail-stats">
      <span><strong>${p.beds}</strong>Bedrooms</span>
      <span><strong>${p.baths}</strong>Bathrooms</span>
      <span><strong>${p.area}</strong>Living space</span>
      <span><strong>${p.type}</strong>Property type</span>
    </div>
    <div class="detail-columns">
      <div>
        <h3>About this property</h3>
        <p>${p.description}</p>
        <h3>Features</h3>
        <div class="features">${p.features.map((f) => `<span>${f}</span>`).join("")}</div>
      </div>
      <div class="agent-box">
        <h3>Your advisor</h3>
        <p style="margin:0 0 4px"><strong>${p.agent.name}</strong></p>
        <p style="margin:0 0 10px;font-size:11px">${p.agent.role}</p>
        <p style="margin:0;font-size:11px"><a href="tel:${p.agent.phone.replace(/[^\d+]/g, "")}">${p.agent.phone}</a><br>
        <a href="mailto:${p.agent.email}">${p.agent.email}</a></p>
        <form class="viewing-form" style="margin-top:16px">
          <div class="field"><label for="viewName">Name</label><input id="viewName" name="name" required></div>
          <div class="field" style="margin-top:10px"><label for="viewEmail">Email</label><input id="viewEmail" name="email" type="email" required></div>
          <button class="btn btn-primary" type="submit" style="margin-top:12px;width:100%">Request a viewing</button>
        </form>
        <div class="form-success">Thank you — your viewing request has been received. An advisor will confirm within one business day.</div>
      </div>
    </div>`;
}

function contactModal() {
  return `
    <h2>Get In Touch</h2>
    <p>Tell us what you are looking for and a Horizon advisor will send a curated shortlist within 24 hours.</p>
    <form class="contact-form" style="margin-top:18px">
      <div class="form-grid">
        <div class="field"><label for="cName">Full name</label><input id="cName" name="name" required></div>
        <div class="field"><label for="cEmail">Email</label><input id="cEmail" name="email" type="email" required></div>
        <div class="field"><label for="cPhone">Phone</label><input id="cPhone" name="phone" type="tel"></div>
        <div class="field">
          <label for="cInterest">Interested in</label>
          <select id="cInterest" name="interest">
            <option>Buying a home</option>
            <option>Selling a property</option>
            <option>Investment advice</option>
            <option>Property management</option>
          </select>
        </div>
        <div class="field full"><label for="cMessage">Message</label><textarea id="cMessage" name="message" placeholder="Locations, budget and timing…"></textarea></div>
      </div>
      <button class="btn btn-primary" type="submit" style="margin-top:16px">Send enquiry</button>
    </form>
    <div class="form-success">Thank you — your enquiry is with our team. We will be in touch shortly.</div>`;
}

function initModal() {
  $("#modalClose").addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && backdrop.classList.contains("open")) closeModal(); });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".favorite")) return;
    const card = e.target.closest("[data-id]");
    if (card) {
      const p = PROPERTIES.find((x) => x.id === card.dataset.id);
      if (p) openModal(propertyModal(p));
      return;
    }
    if (e.target.closest("[data-contact]")) openModal(contactModal());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest && e.target.closest("[data-id]");
    if (card && e.target === card) { e.preventDefault(); card.click(); }
  });

  // favourite hearts
  document.addEventListener("click", (e) => {
    const fav = e.target.closest(".favorite");
    if (!fav) return;
    e.stopPropagation();
    const saved = fav.classList.toggle("saved");
    fav.setAttribute("aria-pressed", String(saved));
    fav.innerHTML = saved ? "&#9829;" : "&#9825;";
    toast(saved ? "Saved to your shortlist" : "Removed from your shortlist");
  });

  // lightbox zoom
  document.addEventListener("click", (e) => {
    const img = e.target.closest("[data-zoom]");
    if (!img) return;
    $("#lightboxImg").src = img.dataset.zoom;
    $("#lightboxImg").alt = img.alt;
    $("#lightbox").classList.add("open");
  });
  $("#lightboxClose").addEventListener("click", () => $("#lightbox").classList.remove("open"));
  $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") $("#lightbox").classList.remove("open"); });

  // forms
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (form.classList.contains("viewing-form") || form.classList.contains("contact-form")) {
      e.preventDefault();
      form.style.display = "none";
      const ok = form.parentElement.querySelector(".form-success") || form.querySelector(".form-success");
      if (ok) ok.classList.add("show");
      toast("Thank you — your request has been received");
    }
  });
}

/* ---------- about carousel arrow ---------- */
function initAbout() {
  const arrow = $("[data-about-next]");
  if (!arrow) return;
  const frames = $$(".about-visual .image-frame");
  const pairs = [
    ["photo-1600585154340-be6161a56a0c", "photo-1600607687939-ce8a6c25118c"],
    ["photo-1600607687920-4e2a09cf159d", "photo-1600210492486-724fe5c67fb0"],
    ["photo-1600566753086-00f18fb6b3ea", "photo-1600047509807-ba8f99d2cdde"]
  ];
  let i = 0;
  arrow.addEventListener("click", () => {
    i = (i + 1) % pairs.length;
    frames[0].querySelector("img").src = UNSPLASH(pairs[i][0], 1200);
    frames[1].querySelector("img").src = UNSPLASH(pairs[i][1], 700);
  });
}

/* ---------- newsletter ---------- */
function initNewsletter() {
  const form = $("#newsletterForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("#newsletterEmail");
    if (!email.value || !email.checkValidity()) {
      toast("Please enter a valid email address");
      return;
    }
    email.value = "";
    toast("You are subscribed — welcome to Horizon");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveal();
  initFeatured();
  initBrowse();
  initServices();
  initTeam();
  initModal();
  initAbout();
  initNewsletter();
});
