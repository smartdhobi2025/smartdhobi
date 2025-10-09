import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',       // sabhi IPs se accessible banata hai (IIS included)
    port: 1100,            // tumhara frontend IIS URL ka port
    strictPort: true       // agar port 1100 busy ho to error dega (auto switch nahi karega)
  },
  preview: {
    host: '0.0.0.0',
    port: 1100
  }
})
