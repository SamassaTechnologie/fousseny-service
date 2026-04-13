const CACHE = "fousseny-v1";

self.addEventListener("install", e => {
 e.waitUntil(
  caches.open(CACHE).then(cache =>
   cache.addAll([
    "index.html",
    "devis.html",
    "facture.html",
    "script.js"
   ])
  )
 );
});

self.addEventListener("fetch", e => {
 e.respondWith(
  caches.match(e.request).then(res => res || fetch(e.request))
 );
});
