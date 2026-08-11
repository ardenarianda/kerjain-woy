self.addEventListener('fetch', (event) => {
  // Service worker sederhana untuk syarat PWA
  event.respondWith(fetch(event.request));
});