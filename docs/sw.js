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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/print.css",
    "revision": "0603f48d90795449e94f6faf9a73b610"
  },
  {
    "url": "assets/css/style.css",
    "revision": "c42f46920f9e71828d96e87d37813640"
  },
  {
    "url": "assets/images/body-bg.png",
    "revision": "356724184a3b6fddbed93c37a430480d"
  },
  {
    "url": "assets/images/hr.png",
    "revision": "6002921db578c7428a8ba3ef08e3189a"
  },
  {
    "url": "index.html",
    "revision": "2cdef8e328edec2915ea182ce8d52893"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
