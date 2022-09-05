/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d38de94bd8dc99c54fad02ccdab06ee2"
  },
  {
    "url": "assets/css/0.styles.c0f42308.css",
    "revision": "a01e9fb131b39d5fd09dfc8584d31494"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f9f93e82.js",
    "revision": "8f16898cad928e0a03baf651bfbf1745"
  },
  {
    "url": "assets/js/11.8ac2a63e.js",
    "revision": "7209137f5948d218503a69746fe862ee"
  },
  {
    "url": "assets/js/12.6c226460.js",
    "revision": "54443da5e764568f79409ad84aa455f9"
  },
  {
    "url": "assets/js/2.e74228e9.js",
    "revision": "86ccff4930902d69bdac6acf559e7ef0"
  },
  {
    "url": "assets/js/3.7dc4efb8.js",
    "revision": "861eceb712f573514846126b5534ba1c"
  },
  {
    "url": "assets/js/4.45a2e36c.js",
    "revision": "480a224f3bf41259cae33bbfea64bf87"
  },
  {
    "url": "assets/js/5.9fd2748b.js",
    "revision": "340666ad8e8f9aef4da05392d2954e59"
  },
  {
    "url": "assets/js/6.788276b2.js",
    "revision": "63baa2f49485b4ff5cc05f46377403a3"
  },
  {
    "url": "assets/js/7.c4491980.js",
    "revision": "050114cf4122bd2d2e16dfe452a3da4c"
  },
  {
    "url": "assets/js/8.e82f31d6.js",
    "revision": "742b2111f386c371557dc76b16f93803"
  },
  {
    "url": "assets/js/9.6e084440.js",
    "revision": "65501eb04c4ffdbf1b6195b48c553ab2"
  },
  {
    "url": "assets/js/app.55e1efb2.js",
    "revision": "79f63c33a6bc4c9a677f1ee03234c3cb"
  },
  {
    "url": "images/assets/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "images/assets/logo-icon.png",
    "revision": "334ffe90ea7c18ee677c32fdd5625ac8"
  },
  {
    "url": "images/assets/logo.png",
    "revision": "7ec7e5bc982c9f314e0758c06a1595e0"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "8e1235d0985ab7a5409b044fc199930c"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "7194a328c2eb01d3584285c268aae176"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "8745693b7862ee1de9fef5119664cd2f"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "85d7fdcf96a0ede88ed86e0f3694fcea"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "d35f8a55e3abfa7496cfeffecaf2e23a"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "90c132364499eac67b535fec01f786ce"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "98dfc4af0df73675a29f5c4d645d4a42"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "67e7093b3dce680365ebe4b43ce25a90"
  },
  {
    "url": "index.html",
    "revision": "a7f9e77e241b550d4f5d1b7b051d5102"
  },
  {
    "url": "my/2022.html",
    "revision": "33f0d193390ddc0ede560c42416b0956"
  },
  {
    "url": "my/2023.html",
    "revision": "e63a323f241cec06a0185bf6f3708412"
  },
  {
    "url": "my/index.html",
    "revision": "84c9f0a80d5226cf20493c11793c7223"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
