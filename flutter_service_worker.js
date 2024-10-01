'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "aefa6fd55687548c2eab159a74823e66",
"version.json": "668519b75973c558cbc191330bc221bf",
"index.html": "af53b16cc59bd14b9e3df59c244e8d69",
"/": "af53b16cc59bd14b9e3df59c244e8d69",
"main.dart.js": "bb7f19a7b8cb0ea693d1e612ae100ff5",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ac3a3b097baa3fbbfd690ec86391f17c",
".git/config": "9d87dc7c1f55c71f194f508548c082bd",
".git/objects/0d/f3175ca96b76c6d9b6e5a75ea160e967b9d16b": "6d58b1c6441aaf824da108a0a3581d0c",
".git/objects/59/83a00740887aa2c36a1a67dbb08a02e339748e": "4ab13e5d77a477565fe567d184a97d7f",
".git/objects/3e/f1211b63dd0278a93a122bfe2bc09b7c5538a7": "135db7582b960cd7d7ddf61841dd206e",
".git/objects/3e/0b5d766496be5d4968cb7febe665888ca0ffcc": "14b51eb7de1d0c9a1fe981c55f4d4087",
".git/objects/9b/619fb1a71267067e79251fb14b2ea1fabaad5a": "2fb5a88d770ba824268ebb70c4290314",
".git/objects/35/57465364e330bef89b6f999846fcb9c052c0b9": "7c7aed0b318a772b98432f1d248f74c8",
".git/objects/51/794fad809de11cdd35aab9a59c65db9af2f2ed": "f02536284c5fd57bda6235637a053392",
".git/objects/3d/6a1201a1c6450876b47dcd8af7af439b360c4f": "4ee67c121d122a7849c4928905cfdb07",
".git/objects/34/71d5cb1b982eeefcefbdb1e7618f688df225fd": "44178855f5e91dbdf6c7afbafb039555",
".git/objects/34/49d48bf0bd4ba75371d2a7e8b23aa2e6e6b5c9": "ddd9cfd77012a257cce598589acd8fd5",
".git/objects/5a/9c695b815dbbc143dd153f4c399bd86af3fc06": "ac9300b3b13f3812f95799b1b5ea08c4",
".git/objects/d0/18edd516cfa4e90b3ee04a39dbf7dd0b28b3c1": "3ec0c9fc04dbe7e2dedcc2cc3841a106",
".git/objects/be/62b0dbe9f5d187eeedd23bfdeacd8a1ff5218d": "dca1e857ccf8a6dc7a6ab3e2c51400d1",
".git/objects/b3/9d4371914aead36cc8747ddb2c0f1c27b6fd88": "043668a609329cf9d3afcaee5169998c",
".git/objects/bd/695bf9584f91cc18320af096debd74d5cb6f1c": "ddcddce19a20fd7fa51f35624f77871f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/633cecfb75a2cc89db7e582cdb6fed055cd899": "8ddf9bf9185cad6595a54a70d20936ce",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d421586900ef146833a52bd8fc3194ecbfc59b": "7032995f495de24fd08964c530495f0b",
".git/objects/c0/bcb620e038845e2cf6dffa18a64db4616a3be1": "edb007c8d91752289625bb4d4ed06d93",
".git/objects/f2/52de412ff1f1444bab8a8522fdbf303a4ba97d": "b074b9cd501e7898555329b63c6d3eb9",
".git/objects/ed/37c32016e2810bcb15878ac9c58dd3baacfe94": "41f9ce85e6d9aa0e84100b232a26911b",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-e21e38e5e3aa5a826ed7da2ba313c21e7331892d.idx": "785252bb89b1494da261bacd4a4b1d88",
".git/objects/pack/pack-e21e38e5e3aa5a826ed7da2ba313c21e7331892d.pack": "cbfba2b673d7c14389a3b4b0f87eb52d",
".git/objects/7d/d738677774efa3193d1459f06b14967e75bfa9": "b023627507e5ac99bbf5c3ec307bde41",
".git/objects/29/d0536c85baffa904d42106d9b371c841ac6717": "d628e983feb716c447b2870c6080fa83",
".git/objects/42/3671b7e56cba47e2a5d8769ced5c8e78732a6e": "0835e0da5e78c4aaea88418eceff451f",
".git/objects/45/cc6f919a6f1cf2d542f67506bbaad56d51ba9a": "8e0bcfa3f4dad79908e1e895a58190bb",
".git/objects/87/31a5a6c13f3a08210fce7430a0b8935c603ece": "327b64d3e5e5e0fc70f84faa8fdba622",
".git/objects/28/7d7bae013d5dfd476e1972acc9c53049533a5f": "8d6c6287f2991f35a5c99e040f4ff592",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c8ba9f2d42c92131128122b354bf5b79dd829c": "9e5e4b808b354602f62cf933e55f2347",
".git/objects/10/0d23b09a17b610bc2f5a41b1a17922b6d7423a": "2382d44acdf3024df7b816db810740e8",
".git/objects/19/ebafc3f71340cb8bb00d20d6f4aef79540983a": "09c652e23ece922789dd2dd2602d0723",
".git/objects/4d/6bc367a5791904b55ac48655d6c9993f206320": "84f61e721f87ca7bfe135b8e15ea15da",
".git/objects/72/c062bc526aa335642b4614cc4301731a7d56ee": "4da9f014e2541c049bf97039965bf62e",
".git/objects/44/d318da1049d9f8387d3b7050d3d7db1a0a27fc": "36dc2ae201972ed1c0ce61cd9117504f",
".git/objects/43/e34fd4e087f24952228e2324da0c72bc80ff8d": "2385c7e554c6b5bafc8ca64b97ed39da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9a9599d064417a4ddee9b3c326f2d2a598557a": "770563c8fd2a710b87c30be86f9a6836",
".git/objects/9a/e9479c2c4daeee0bd02c2968736b73ef24cd86": "d2d2864878867225535440d259b6e140",
".git/objects/30/f79f27b465730cd6021279a750f183a40c7d25": "d28d3992afa58e8e7c821362df32f3c1",
".git/objects/5e/38d927d5b85fd69033b4420fa90c9a528b8a1c": "c77423375d2f725531d0f13cda6458e3",
".git/objects/08/140f842a4fe6a6614082a266f4075d3819c566": "d6155fdd14664f9f35fe9927a04ab415",
".git/objects/6d/8fa5b33f02d470d50dcd7b9af7a75c8a78d019": "b16ccffddd8dc3c7381632e8b0f0a323",
".git/objects/39/a1f5011e530130466042262f2a5f59a9ab881d": "2f8e005e5164c9cc57757d8a3bbe4e0e",
".git/objects/dc/cf4cbef18ba40ce1e8d0665b42189c3fd07090": "e31102d85d2b3af16c543524374a8b0f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0fe64a158dab17ac0193e7a47c3a63f646f9ae": "8319b6b7612207be8438fd97b70d54ef",
".git/objects/a8/927dd2b344424cc4d39154979277f1dcc6ef02": "4d921363374bb3928c46458ba0354648",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/04a9184bf886423d0f223e925710b960bd292b": "4f1049003953a6051e4a342eb3c514a5",
".git/objects/ef/cba6c943aab3961a40a5b7e4909d46532d3510": "233b23d69eb6bb6442b208c7eb164df6",
".git/objects/ea/4bbfcc9e0f656ae30cb8ffd893c467fd14fdaf": "fd8befef355e9abc40cdbfe403fafb88",
".git/objects/f9/41ab4e7e4de46b0f8d81d12eb72438e1ed8755": "fc67f8d6b0152c274b6ff59575103400",
".git/objects/e8/cc5f97c5a4575a15195d798c2001abfd50e2ce": "7b2f5e80f52cc994323f5ea8c7427efb",
".git/objects/c2/291d9ce4997c42e60b9a75f1996088f24350e1": "0658c454cd464fe1de6d437c2d24735f",
".git/objects/e9/0449fb68de9d1dc7b339dc2ba82391f6b1001f": "7b6968cccd1ad89cf728da94121fb23c",
".git/objects/79/6e868d8b09b99fa6da0fa5f6b30f20c4ab1bc5": "6fe530b4175d012db306f9b35356f489",
".git/objects/2d/bfbdd5fee55a5171e14bb944a0906bfac07d14": "6c5e9b6bbc5b91d73bdf6506fe6042ee",
".git/objects/1e/8353d7a72382ca2eb125c19a4a62f6e87ba93d": "6e477423d3a1d3a39e185329f5d4d9c5",
".git/objects/8d/43922d37d98b83798821865fca7624c6010214": "e00bd75f28db413e2534f5228979059b",
".git/objects/8d/1c996eb7e07bbd37c6ef400320f1ade5cbf629": "e5b2d465bb16019745fc449a5589f3bd",
".git/objects/15/a589e23ba2bf5783f56a9ab7abc144477c683f": "e593b68a53f7db1b01b46ea1ab064aee",
".git/objects/8c/7a82bca8cef7ccb1f9d2b523508501af44d8fd": "291e9855540ecd7753112d2ed64c3296",
".git/objects/82/2d735a0ef25a724d5af28e92ffe3f47769a436": "49def70e668dd7de47ef31796f276d13",
".git/objects/7a/982fca855ea404482b4c98f3440f9213515f87": "0df517f275d40c6022763abba0c48f52",
".git/objects/22/40a6174460a1bb2b9acf8c62c5d154918684e2": "c64222fd26869204c8b6f6dc917eddf9",
".git/HEAD": "cf108b77b89aa7f218d212a403a4c6c9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3bbc4d93e043a4557dc658235a8f8ff9",
".git/logs/refs/heads/e": "3bbc4d93e043a4557dc658235a8f8ff9",
".git/logs/refs/remotes/origin/main": "275c55329f026ad2e4bcbbad18790cae",
".git/logs/refs/remotes/origin/e": "2270da4eb69fdc0b48d96fa5313c3310",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/e": "13e15496a5a1110ee7a5ba96616ea8e5",
".git/refs/remotes/origin/main": "8211452c34bfd8942568dc3c02880fea",
".git/refs/remotes/origin/e": "13e15496a5a1110ee7a5ba96616ea8e5",
".git/index": "b4d1abbfb399cc5c0b03968abd94c8ac",
".git/COMMIT_EDITMSG": "055a76ce86d5e910f6a577b86b160181",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "8c0fbb6a6c4f431f3d9af8e90a98c776",
"assets/NOTICES": "c1fcda314081dd3c231eb106312c00d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9942dde6c954d46acccfc166e661c833",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "def8f7919c15d8d5d57d0e82ffa991c1",
"assets/fonts/MaterialIcons-Regular.otf": "a1a63155ee15ef48e66dc9ecbebf1f10",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
