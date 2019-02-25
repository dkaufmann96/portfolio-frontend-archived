importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4949ba2b0e3ae5ca137d.js",
    "revision": "53a0d657290233c22fb5f5e5ad2bbc71"
  },
  {
    "url": "/_nuxt/6834b1f9bf423ef89244.js",
    "revision": "b3026057346ac2153e8ee92f6c00b15d"
  },
  {
    "url": "/_nuxt/cd75e686edcf2c552c78.js",
    "revision": "e6bfc214eac1302913dc2c1b75c3a10c"
  },
  {
    "url": "/_nuxt/efd0f1ee5a8ccfa2aa22.js",
    "revision": "47c4670cb19990bd2c6953ed52cea335"
  },
  {
    "url": "/_nuxt/f086a4db480ce6ebd403.js",
    "revision": "5c15466bdd8b0ee13a0b4755541ac8f4"
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
