var staticCache = 'review-app-static-v1';

/*==========Service Worker Installtion (caching all pages) =============*/
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(staticCache).then(function(cache){
    return cache.addAll([
      './',
      'index.html',
      'restaurant.html',
      'data/resraurant.json',
      'css/style.css',
      'js/main.js',
      'js/restaurant_info.js',
      'js/dbhelper.js',
      'js/indexController.js',
      'img/1.jpg',
      'img/2.jpg',
      'img/3.jpg',
      'img/4.jpg',
      'img/5.jpg',
      'img/6.jpg',
      'img/7.jpg',
      'img/8.jpg',
      'img/9.jpg',
      'img/10.jpg'
    ]);
  }));
});

/*==========Service Worker New Cache Activation  =============*/
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(caches){
    return Promise.all(cache.filter(function(cacheName){
      return cacheName.startwith('review') && cacheName != staticCache;
    }).map(function(cacheName){
      return caches.delete(cacheName);
    }));
  }));
});

/*==========Service Worker Fetching Request =============*/
self.addEventListener('fetch', function(e){
  e.respondWith(caches.match(e.request)
  .then(function(response){
    return fetch(e.request) || response ;
  }));
});
