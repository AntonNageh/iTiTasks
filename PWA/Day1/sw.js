self.addEventListener('install', async function(event) {
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open('my-cache');
        await cache.addAll([
          '/Pages/Page2.html',
          '/index.js',
          '/CSS/styles.css', 
          '/index.html',
          '/404.html'
        ]);
      } catch (error) {
        console.error('Error caching resources:', error);
      }
    })()
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    (async function() {
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }
      try {
        const networkResponse = await fetch(event.request);
        if (!networkResponse || networkResponse.status === 404) {
          return await caches.match('/404.html');
        }
        return networkResponse;
      } catch (error) {
        return await caches.match('/404.html');
      }
    })()
  );
});
