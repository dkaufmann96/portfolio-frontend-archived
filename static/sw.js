importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3837366863c7b390f000.js",
    "revision": "19479e53e63eb540cb1a6463305ee7e9"
  },
  {
    "url": "/_nuxt/4886a050f152647bdb63.js",
    "revision": "14fd8af58d408324e432482288be7e2a"
  },
  {
    "url": "/_nuxt/54fce439f1f2b9da1012.js",
    "revision": "fec3c0ee185eb5d25e20d570a0007c58"
  },
  {
    "url": "/_nuxt/a272c3575ffd00a5a27f.js",
    "revision": "233478eee3fb8c99b865b18b337cfb89"
  },
  {
    "url": "/_nuxt/e9175b10e1b7a296ae2d.js",
    "revision": "4020d4ecdb92d5b2254a8bf6407f4443"
  }
], {
  "cacheId": "portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
