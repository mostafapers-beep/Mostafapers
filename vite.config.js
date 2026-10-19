import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When running inside the Base44 preview sandbox we must accept the proxied
// hostname the preview forwards to the dev server. Outside the preview the
// default (localhost only) behaviour is preserved.
const isPreview = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: isPreview && sandboxDomain ? ['.' + sandboxDomain] : undefined,
  },
})
