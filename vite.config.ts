import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acesso externo
    allowedHosts: [
      'hamper.duckdns.org', // Domínio DuckDNS
      'localhost', // Acesso local
      '0.0.0.0',   // Permite qualquer IP (cuidado em produção)
      '100.26.203.78' // Substitua pelo seu IP real
    ],
    cors: true // Habilita CORS
  }
});
