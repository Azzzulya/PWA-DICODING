importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');


workbox.precaching.precacheAndRoute([
  {url : "/", revision:"1"},
  {url:"/manifest.json", revision: "1"},
  {url: "/index.html", revision:"1"},
  {url: "/nav.html", revision:"1"},
  {url: "/detailTeam.html", revision:"1"},
  {url: "/pages/home.html", revision:"1"},
  {url: "/pages/teams.html", revision:"1"},
  {url: "/pages/loved.html", revision:"1"},
  {url: "/css/materialize.min.css", revision:"1"},
  {url: "/js/materialize.min.js", revision:"1"},
  {url: "/js/api.js", revision:"1"},
  {url: "/js/db.js", revision:"1"},
  {url: "/js/idb.js", revision:"1"},
  {url: "/js/klasmen.js", revision:"1"},
  {url: "/js/nav.js", revision:"1"},
  {url: "/js/teams.js", revision:"1"},
  {url: "/js/regisandrequest.js", revision:"1"},
  {url: "/js/teams.js", revision:"1"},
  {url: "/js/porcessLoved.js", revision:"1"},
  {url: "https://fonts.googleapis.com/icon?family=Material+Icons", revision:"1"},
], {
  ignoreUrlParametersMatching: [/.*/]
});

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
      cacheName: "images",
      plugins: [
          new workbox.expiration.Plugin({
              maxEntries: 50,
              maxAgeSeconds: 7 * 24 * 60 * 60,
          }),
      ],
  })
);

workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
  new RegExp("/pages/"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "pages"
  })
);

workbox.routing.registerRoute(
  ({url}) => url.origin,
  workbox.strategies.staleWhileRevalidate({
    cacheName: "url"
  })
)

workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate()
)

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'img/notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});