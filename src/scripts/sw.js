/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
self.addEventListener('install', (event) => {
  console.log('installing service worker')
  // do something
})

self.addEventListener('activate', (event) => {
  console.log('activating service worker')
})

self.addEventListener('fetch', (event) => {
  console.log(event.request)

  event.respondWith(fetch(event.request))
  // TODO: Add/get fetch request to/from caches
})
