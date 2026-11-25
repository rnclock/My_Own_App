/* PrintSketch service worker: lets the app open and work with no internet. */
var VERSION = 'fd434c87f2';
var APP = 'printsketch-app-' + VERSION;
var FONTS = 'printsketch-fonts-v1';
var CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(APP).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('printsketch-app-') === 0 && k !== APP; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function networkFirst(req, cacheName) {
  // always ask the server (skip the browser's 10-minute page cache) so a new version shows up right away
  return fetch(req, { cache: 'no-cache' }).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); caches.open(cacheName).then(function (c) { c.put(req, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (r) { return r || caches.match('./index.html'); });
  });
}
function cacheFirst(req, cacheName) {
  return caches.match(req).then(function (hit) {
    if (hit) return hit;
    return fetch(req).then(function (res) {
      if (res && (res.ok || res.type === 'opaque')) { var copy = res.clone(); caches.open(cacheName).then(function (c) { c.put(req, copy); }); }
      return res;
    });
  });
}
function staleWhileRevalidate(req, cacheName) {
  return caches.open(cacheName).then(function (c) {
    return c.match(req).then(function (hit) {
      var net = fetch(req).then(function (res) { if (res && res.ok) c.put(req, res.clone()); return res; }).catch(function () { return hit; });
      return hit || net;
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.hostname === 'fonts.gstatic.com') return e.respondWith(cacheFirst(req, FONTS));
  if (url.hostname === 'fonts.googleapis.com') return e.respondWith(staleWhileRevalidate(req, FONTS));
  if (url.origin !== self.location.origin) return;
  // The app page: get the newest when online, use the saved copy when offline.
  if (req.mode === 'navigate' || /\/(index\.html)?$/.test(url.pathname)) return e.respondWith(networkFirst(req, APP));
  e.respondWith(cacheFirst(req, APP));
});
