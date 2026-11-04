const CACHE = "tk-reward-v2";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./tk-reward-192.png",
        "./tk-reward-512.png"
      ])
    )
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method === "GET") {
    event.respondWith(
      caches.match(event.request).then(response =>
        response || fetch(event.request)
      )
    );
  }
});

