// const cacheName = 'v1';

// const cacheAssets = [
//   'index.html',
//   'about.html',
//   '/css/style.css',
//   '/js/main.js'
// ];

// // Call Install Event
// self.addEventListener('install', e => {
//   console.log('Service Worker: Installed');

//   e.waitUntil(
//     caches
//       .open(cacheName)
//       .then(cache => {
//         console.log('Service Worker: Caching Files');
//         cache.addAll(cacheAssets);
//       })
//       .then(() => self.skipWaiting())
//   );
// });

// // Call Activate Event
// self.addEventListener('activate', e => {
//   console.log('Service Worker: Activated');
//   // Remove unwanted caches
//   e.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map(cache => {
//           if (cache !== cacheName) {
//             console.log('Service Worker: Clearing Old Cache');
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// // Call Fetch Event
// self.addEventListener('fetch', e => {
//   console.log('Service Worker: Fetching');
//   e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
// });




var cacheName = 'v1.0';

var cacheAssets = [
    'index.html',
    'about.html',
    '/js/main.js',
    '/css/style.css'
]

// installation
self.addEventListener('install', e => {
      console.log('Service Worker: Installed');
      e.waitUntil(
            caches
              .open(cacheName)
              .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
              })
              .then(() => self.skipWaiting())
          );

});    

// activation
self.addEventListener('activate', e => {
    console.log('Service Worker: Installed');
}); 

// fetch

self.addEventListener('fetch', e => {
      console.log('Service Worker: Fetching');
        e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
      
});