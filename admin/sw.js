// Escopo restrito a /siteoficial/admin/. Sem cache de HTML, sessoes ou dados administrativos.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  // Network-only: autenticacao e dados sempre vem da rede.
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request));
});
