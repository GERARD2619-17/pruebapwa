self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./src/master.css",
        "./images/hockey_icon_x48.png",
      ]);
    })
  );
});
//primera parte finalizada que es para indicar el pwa fue instalado con exito
self.addEventListener("fetch", (e) => {
  console.log(`Intercepting fetch request for: ${e.request.url}`);
});
