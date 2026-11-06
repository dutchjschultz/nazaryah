// Network first: a new upload appears on the next online visit. The saved copy runs offline.
const CACHE = 'say-it-in-thai';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'])));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok || r.type === 'opaque') { const k = r.clone(); caches.open(CACHE).then(c => c.put(e.request, k)); }
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('./')))
  );
});
