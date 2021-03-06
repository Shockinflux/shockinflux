let CACHE_NAME = 'shockinflux-cache';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>{
      // console.log("opened cache");
      return cache.addAll([
          '/',
          'index.html',
          'privacy.html',
          'terms.html',
          'faq.html',
          'css/main.css',
          'css/dropshadow.css',
          'css/responsive.css',
          'css/animate.css',
          'bootstrap/css/bootstrap.min.css',
          'js/main.js',
          'jquery/jquery.min.js',
          'js/slick.js',
          'js/shockinflux.js',
          'bootstrap/js/bootstrap.min.js'
        ]);
    })
  );

});



self.addEventListener('activate', (event) =>{
  event.waitUntil(
    caches.keys().then((cacheNames) =>{
      return Promise.all(
        cacheNames.filter((cacheName) =>{
          return cacheName.startsWith('shockinflux-') && cacheName != CACHE_NAME;
        }).map((cacheName) =>{
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request);
  let requestUrl = new URL(event.request.url);
  // console.log(requestUrl);
  event.respondWith(
    caches.match(event.request)
    .then((response) =>{
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(url) {
  return fetch(url)
  .then((response) =>{
    // Check if we received a valid response
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return caches.open(CACHE_NAME)
    .then((cache) =>{
      cache.put(url, response.clone());
      return response;
    });
  })
  .catch((error) =>{
    console.log('Request failed:', error);
    // You could return a custom offline 404 page here

  });
}

self.addEventListener('message', function(event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
