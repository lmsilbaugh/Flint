const CACHE = 'flint-v3';
const ASSETS = [
  '/Flint/',
  '/Flint/index.html',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.5.4/peerjs.min.js'
];

// Install — cache core assets
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      // Cache what we can, ignore failures for external resources
      return Promise.allSettled(
        ASSETS.map(function(url) {
          return cache.add(url).catch(function() {});
        })
      );
    })
  );
  self.skipWaiting();
});

// Activate — clean up old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch — serve from cache, fall back to network
self.addEventListener('fetch', function(e) {
  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        // Cache successful responses for app assets
        if (response && response.status === 200) {
          var url = e.request.url;
          if (url.includes('/Flint/') || url.includes('peerjs') || url.includes('fonts')) {
            var clone = response.clone();
            caches.open(CACHE).then(function(cache) {
              cache.put(e.request, clone);
            });
          }
        }
        return response;
      }).catch(function() {
        // If offline and not cached, return the app shell
        return caches.match('/Flint/index.html');
      });
    })
  );
});
