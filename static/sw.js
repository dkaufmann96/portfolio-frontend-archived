importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3a5bc1ad836d0d99d0e6.js",
    "revision": "e5a48b8918f4929059219b7602e9d61f"
  },
  {
    "url": "/_nuxt/56e780047066722f7609.js",
    "revision": "bb2a6a19e652d3cdb361637de4771f19"
  },
  {
    "url": "/_nuxt/7b38f91bab3f2e74384f.js",
    "revision": "ab9ca4e8305fb87c4c1a6740f7ee8a00"
  },
  {
    "url": "/_nuxt/a7b173c21de0742fda82.js",
    "revision": "8d9543b72feab5c7000165fd964702be"
  },
  {
    "url": "/_nuxt/afa8a9e0c587e56bcb7c.js",
    "revision": "b50e827b2183b71b6dd7421d7df9cb47"
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
