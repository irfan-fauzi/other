/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime'
import CacheHelper from './utils/cache-helper'

const { assets } = global.serviceWorkerOption

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
  // do something
})

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request))
  // TODO: Add/get fetch request to/from caches
})
