

// Make sure sw are supported
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('../sw_cached_pages.js')
//       .then(reg => console.log('Service Worker: Registered'))
//       .catch(err => console.log(`Service Worker: Error: ${err}`));
//   });
// }


// regitration

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        console.log('App is loader');
        navigator.serviceWorker.register('../sw_cached_pages.js')
            .then( () => {
                console.log("Service Worker registerd");
            })
    })
}