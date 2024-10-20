'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "93376304a189e9c4a1fc69bb50a70c39",
"version.json": "668519b75973c558cbc191330bc221bf",
"index.html": "14020176b48c79f9d1d83ff9e950e392",
"/": "14020176b48c79f9d1d83ff9e950e392",
"main.dart.js": "2d723a36ddf32d8aec15f02b85d4191c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ac3a3b097baa3fbbfd690ec86391f17c",
".git/ORIG_HEAD": "9767304b5540f6907823d5791e977677",
".git/config": "9d87dc7c1f55c71f194f508548c082bd",
".git/objects/61/38470718f8bc6561c865c12ec4c18a5ec6c8fa": "f362277b4b0f4198cae1dadd7bbb5e44",
".git/objects/0d/f3175ca96b76c6d9b6e5a75ea160e967b9d16b": "6d58b1c6441aaf824da108a0a3581d0c",
".git/objects/59/43679750969266062a822382662c0f14f74198": "9cb31e08d47d899140d96fd75d5bf71a",
".git/objects/59/83a00740887aa2c36a1a67dbb08a02e339748e": "4ab13e5d77a477565fe567d184a97d7f",
".git/objects/92/875464c4a97d3157696e0bd76962accf30b37d": "36930a1dc215dff343c436d412790e40",
".git/objects/3e/f1211b63dd0278a93a122bfe2bc09b7c5538a7": "135db7582b960cd7d7ddf61841dd206e",
".git/objects/3e/0b5d766496be5d4968cb7febe665888ca0ffcc": "14b51eb7de1d0c9a1fe981c55f4d4087",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/9b/734281dee72cedbb0fbb885b859c0d6329fc92": "6eb889fbdada9c6134c735fc4730657d",
".git/objects/9b/6e80c78b3fcdbfd1eca294e86f0cf94e528ce5": "057957c55e692b56d8ec8e930eb73f07",
".git/objects/9b/619fb1a71267067e79251fb14b2ea1fabaad5a": "2fb5a88d770ba824268ebb70c4290314",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/57465364e330bef89b6f999846fcb9c052c0b9": "7c7aed0b318a772b98432f1d248f74c8",
".git/objects/56/c2a6af9f56568f9b54a9a21c7c673f60e80dd6": "71981dd40ccaee3d4afa507ba6c9e92d",
".git/objects/51/794fad809de11cdd35aab9a59c65db9af2f2ed": "f02536284c5fd57bda6235637a053392",
".git/objects/3d/4f54ab8dd2c58962ed4ed3c3a63ccead4b8526": "1503c7f0fa93915aab63bbe4e3e9dfbc",
".git/objects/3d/6a1201a1c6450876b47dcd8af7af439b360c4f": "4ee67c121d122a7849c4928905cfdb07",
".git/objects/58/7308170494c117b85a1274e9347fe302605b2c": "b4cba73a6d9bff1b53e8109336cd8fcb",
".git/objects/0b/e566f01a8dee3a5f8ad0615f227207f44e461f": "24c2ae7118ebcf3b37f10ba14951a264",
".git/objects/0e/40a79160251487f6e2bdcac50e793bec865977": "bcba7f217ebb60ae500680a6e218d690",
".git/objects/34/71d5cb1b982eeefcefbdb1e7618f688df225fd": "44178855f5e91dbdf6c7afbafb039555",
".git/objects/34/49d48bf0bd4ba75371d2a7e8b23aa2e6e6b5c9": "ddd9cfd77012a257cce598589acd8fd5",
".git/objects/5a/9c695b815dbbc143dd153f4c399bd86af3fc06": "ac9300b3b13f3812f95799b1b5ea08c4",
".git/objects/9d/46b19a1937ef31f7f9b616b58d252c6d693e1b": "f3accaa37737a42437c2e1cbf6108a36",
".git/objects/d7/49cfe8e8275954bc189f3f5550b124d0c0ceaf": "ad0b7f1532564b613ccd9efcb19ecfe1",
".git/objects/d0/18edd516cfa4e90b3ee04a39dbf7dd0b28b3c1": "3ec0c9fc04dbe7e2dedcc2cc3841a106",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/62b0dbe9f5d187eeedd23bfdeacd8a1ff5218d": "dca1e857ccf8a6dc7a6ab3e2c51400d1",
".git/objects/b3/9d4371914aead36cc8747ddb2c0f1c27b6fd88": "043668a609329cf9d3afcaee5169998c",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/9ed1734c22046a22f2fac8d35098d41afb7297": "02232bdd67efceb24f785ecc148290e9",
".git/objects/bd/695bf9584f91cc18320af096debd74d5cb6f1c": "ddcddce19a20fd7fa51f35624f77871f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/633cecfb75a2cc89db7e582cdb6fed055cd899": "8ddf9bf9185cad6595a54a70d20936ce",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d421586900ef146833a52bd8fc3194ecbfc59b": "7032995f495de24fd08964c530495f0b",
".git/objects/c0/bcb620e038845e2cf6dffa18a64db4616a3be1": "edb007c8d91752289625bb4d4ed06d93",
".git/objects/f2/52de412ff1f1444bab8a8522fdbf303a4ba97d": "b074b9cd501e7898555329b63c6d3eb9",
".git/objects/cf/dc13871baff9775c36627810801d383c968252": "f463a21b0de76133c006bfe09cd88227",
".git/objects/ed/37c32016e2810bcb15878ac9c58dd3baacfe94": "41f9ce85e6d9aa0e84100b232a26911b",
".git/objects/c1/82cba01dabf42b2c6c447963c8ced69f837286": "fa82f26136478933aad5a17ce7c9004e",
".git/objects/4e/04ce45aa2c7e7acb1b8c7040bc67181a635ca0": "482dfcc18ae44d874faef7c9cfec81f5",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-e21e38e5e3aa5a826ed7da2ba313c21e7331892d.idx": "785252bb89b1494da261bacd4a4b1d88",
".git/objects/pack/pack-e21e38e5e3aa5a826ed7da2ba313c21e7331892d.pack": "cbfba2b673d7c14389a3b4b0f87eb52d",
".git/objects/7d/d738677774efa3193d1459f06b14967e75bfa9": "b023627507e5ac99bbf5c3ec307bde41",
".git/objects/29/d0536c85baffa904d42106d9b371c841ac6717": "d628e983feb716c447b2870c6080fa83",
".git/objects/42/b7e5dfaa97a5a155d97c0af3afbd2c8b7ca0f3": "a42a7dcf91d11ec7426fa7993295b239",
".git/objects/42/3671b7e56cba47e2a5d8769ced5c8e78732a6e": "0835e0da5e78c4aaea88418eceff451f",
".git/objects/45/cc6f919a6f1cf2d542f67506bbaad56d51ba9a": "8e0bcfa3f4dad79908e1e895a58190bb",
".git/objects/87/31a5a6c13f3a08210fce7430a0b8935c603ece": "327b64d3e5e5e0fc70f84faa8fdba622",
".git/objects/80/9ff170241d127376285e2f43d173431fb95b4f": "a1222ddfeab17fd2025056f95ffecd0d",
".git/objects/28/7d7bae013d5dfd476e1972acc9c53049533a5f": "8d6c6287f2991f35a5c99e040f4ff592",
".git/objects/8f/d903b4123917aeedb875e4a364d93b18c55de1": "45fc30d39da11146f936dcc71f77a60d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/c8ba9f2d42c92131128122b354bf5b79dd829c": "9e5e4b808b354602f62cf933e55f2347",
".git/objects/10/0d23b09a17b610bc2f5a41b1a17922b6d7423a": "2382d44acdf3024df7b816db810740e8",
".git/objects/19/ebafc3f71340cb8bb00d20d6f4aef79540983a": "09c652e23ece922789dd2dd2602d0723",
".git/objects/26/7e62253bcb56fe303ad86dd515ef6db4acc8b2": "da7f0ec85f187b3f2d439728f5411bbf",
".git/objects/4d/6bc367a5791904b55ac48655d6c9993f206320": "84f61e721f87ca7bfe135b8e15ea15da",
".git/objects/72/c062bc526aa335642b4614cc4301731a7d56ee": "4da9f014e2541c049bf97039965bf62e",
".git/objects/44/d318da1049d9f8387d3b7050d3d7db1a0a27fc": "36dc2ae201972ed1c0ce61cd9117504f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/e34fd4e087f24952228e2324da0c72bc80ff8d": "2385c7e554c6b5bafc8ca64b97ed39da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9a9599d064417a4ddee9b3c326f2d2a598557a": "770563c8fd2a710b87c30be86f9a6836",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/9a/e9479c2c4daeee0bd02c2968736b73ef24cd86": "d2d2864878867225535440d259b6e140",
".git/objects/96/71a02a1191ed207dc2de845f7bf20f23bc7441": "d2d2395344577331f9fa2323b67179a6",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/f79f27b465730cd6021279a750f183a40c7d25": "d28d3992afa58e8e7c821362df32f3c1",
".git/objects/5e/38d927d5b85fd69033b4420fa90c9a528b8a1c": "c77423375d2f725531d0f13cda6458e3",
".git/objects/08/7d85c4984e266291b2bf584e3d3ac26bcc8fbe": "bf8e66c150fa66429451076dc420ede5",
".git/objects/08/140f842a4fe6a6614082a266f4075d3819c566": "d6155fdd14664f9f35fe9927a04ab415",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/8fa5b33f02d470d50dcd7b9af7a75c8a78d019": "b16ccffddd8dc3c7381632e8b0f0a323",
".git/objects/01/bc4247bd590ec726c792269862dd5f84620093": "03cc3dbc1d7859769e29d3ba0f4b17ba",
".git/objects/06/c6194c22dea290a1512a2d524350dda6e6ade2": "882328aa8909475bc8fd03d66ee9260d",
".git/objects/39/a1f5011e530130466042262f2a5f59a9ab881d": "2f8e005e5164c9cc57757d8a3bbe4e0e",
".git/objects/52/e582b0e30485ab9d1ce827f49c8daa5cf0740e": "d0c3aef15366c6d28a3653a14bcbe5e6",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/c3bb687d72fc46ce4547b93d300f0856390dea": "d7dffa36bc336dd5456c57027fef0b8a",
".git/objects/ba/e76227805a68f34ba4864f90baad8877e0b721": "926e66c5feaff805bdcf7e51e0cdd9df",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/cf4cbef18ba40ce1e8d0665b42189c3fd07090": "e31102d85d2b3af16c543524374a8b0f",
".git/objects/b6/0d0787ce3d6352b233d8e6dc9735eb08afca4c": "a495266bceaa1f41bc90b3212dbb69a2",
".git/objects/d5/ebec85135b080fb7db123f6a4c811861173abb": "832399ba280eb0e7a869630434b0edf5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/4d7ad5f83701b0b179f666f2f5afc0ac4cc392": "ca84f73a3fa1d5e76566089cc42438ce",
".git/objects/db/0fe64a158dab17ac0193e7a47c3a63f646f9ae": "8319b6b7612207be8438fd97b70d54ef",
".git/objects/a8/927dd2b344424cc4d39154979277f1dcc6ef02": "4d921363374bb3928c46458ba0354648",
".git/objects/b0/6c0de3b618a5efea0b19ddafbcbe24e947066a": "688f2fbfc885fa2052ce9aaf135b55b9",
".git/objects/a6/57df6c7cc2fb89ced17090164d9b29dff1f6b0": "03889e295a216dfbd3961b4916c266c0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/04a9184bf886423d0f223e925710b960bd292b": "4f1049003953a6051e4a342eb3c514a5",
".git/objects/ef/92f7de815cefbe3130c931740a1a6ffd290d7a": "c510cc09d45c32c1c5e2d47c85e81dff",
".git/objects/ef/cba6c943aab3961a40a5b7e4909d46532d3510": "233b23d69eb6bb6442b208c7eb164df6",
".git/objects/c3/87c7383f52fe8a4ddc9f5c19ce8a8c003d4b44": "e44ba8007f50b713961aa01d5f9b5938",
".git/objects/ea/4bbfcc9e0f656ae30cb8ffd893c467fd14fdaf": "fd8befef355e9abc40cdbfe403fafb88",
".git/objects/f9/41ab4e7e4de46b0f8d81d12eb72438e1ed8755": "fc67f8d6b0152c274b6ff59575103400",
".git/objects/e8/cc5f97c5a4575a15195d798c2001abfd50e2ce": "7b2f5e80f52cc994323f5ea8c7427efb",
".git/objects/c2/291d9ce4997c42e60b9a75f1996088f24350e1": "0658c454cd464fe1de6d437c2d24735f",
".git/objects/e9/0449fb68de9d1dc7b339dc2ba82391f6b1001f": "7b6968cccd1ad89cf728da94121fb23c",
".git/objects/f8/318ca365f4105d4829de26177451e68d709351": "a5025d6398dc745bb337b7f103cd2f7d",
".git/objects/ce/6e47a5e53829259e1107ef1438107a6c5d783c": "5a9e9f6acf109bed57eef40af34ccba5",
".git/objects/e0/9a60cbe02e60a685159257c7b21d0057e71fd9": "78ae1b61711a15ef74605af323c8b81e",
".git/objects/46/a1b6cf9caa6948742481a29465fd366b87e10e": "7a1a07a9fa5da79f7f580ea74569436e",
".git/objects/79/6e868d8b09b99fa6da0fa5f6b30f20c4ab1bc5": "6fe530b4175d012db306f9b35356f489",
".git/objects/2d/bfbdd5fee55a5171e14bb944a0906bfac07d14": "6c5e9b6bbc5b91d73bdf6506fe6042ee",
".git/objects/1b/b39b0b12057f4124aa3282df12414b03177e1a": "cc01e447b5350473b249f78d3958c5bb",
".git/objects/1e/8353d7a72382ca2eb125c19a4a62f6e87ba93d": "6e477423d3a1d3a39e185329f5d4d9c5",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/43922d37d98b83798821865fca7624c6010214": "e00bd75f28db413e2534f5228979059b",
".git/objects/8d/1c996eb7e07bbd37c6ef400320f1ade5cbf629": "e5b2d465bb16019745fc449a5589f3bd",
".git/objects/15/a589e23ba2bf5783f56a9ab7abc144477c683f": "e593b68a53f7db1b01b46ea1ab064aee",
".git/objects/8c/6dd0342e8401fb07168c4d4eb4437382d934d3": "3b5b9ac5c2100723c68475d520214122",
".git/objects/8c/7a82bca8cef7ccb1f9d2b523508501af44d8fd": "291e9855540ecd7753112d2ed64c3296",
".git/objects/71/a33364ca6762fee5b7afdcb101d2172ddf48b3": "9dcf760313d545104e128ed44675734f",
".git/objects/71/19c8d153ef331de3aeb87447d12940e6324859": "fd6b98c77214885341306ec9c939eb22",
".git/objects/76/3f8b4d1823dfa66f0460ce5abfddeb00e7c681": "d80e3325fb682f2792d4617feb0a242e",
".git/objects/1c/9c4a3bd60ce464f7e59a70e5aa77cefa7fb16d": "db3af89dd82c681e5750c12ed51f84b0",
".git/objects/82/2d735a0ef25a724d5af28e92ffe3f47769a436": "49def70e668dd7de47ef31796f276d13",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/78/dd09f942285c472f9aa923641eb9645fa0bf9d": "235388e5fac7185b7bac313e5021a869",
".git/objects/78/c5148e35c5be3e9b94c36e9300422f6b661cd5": "c70dce9d628a8381c984c96100e50326",
".git/objects/7a/982fca855ea404482b4c98f3440f9213515f87": "0df517f275d40c6022763abba0c48f52",
".git/objects/8e/3ad7d3c11616391dd4fa8b74d670a9f04a0490": "30c40228cc5acf1a37749d9d592550ef",
".git/objects/22/40a6174460a1bb2b9acf8c62c5d154918684e2": "c64222fd26869204c8b6f6dc917eddf9",
".git/HEAD": "cf108b77b89aa7f218d212a403a4c6c9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3bbc4d93e043a4557dc658235a8f8ff9",
".git/logs/refs/heads/main": "f3480083ae9f4f4772b6292fc19ae302",
".git/logs/refs/heads/e": "3bbc4d93e043a4557dc658235a8f8ff9",
".git/logs/refs/remotes/origin/main": "546382f618359bf37d6eee8a5f6bec62",
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
".git/refs/heads/main": "cedf1323a28663e793fd2700aaa52170",
".git/refs/heads/e": "13e15496a5a1110ee7a5ba96616ea8e5",
".git/refs/remotes/origin/main": "6d676f76f6c38e4c0797a2dbfeba9a04",
".git/refs/remotes/origin/e": "13e15496a5a1110ee7a5ba96616ea8e5",
".git/index": "b4d1abbfb399cc5c0b03968abd94c8ac",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "055a76ce86d5e910f6a577b86b160181",
".git/FETCH_HEAD": "c61daf5db83e9b8e629e15834036c336",
"assets/AssetManifest.json": "8c0fbb6a6c4f431f3d9af8e90a98c776",
"assets/NOTICES": "c454b6ad776f0806b4d5ee837c115519",
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
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
