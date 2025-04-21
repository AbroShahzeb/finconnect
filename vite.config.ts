import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['finconnect.shahzebabro.com', 'www.finconnect.shahzebabro.com', 'https://finconnect.shahzebabro.com', 'https://www.finconnect.shahzebabro.com']
  }
})
