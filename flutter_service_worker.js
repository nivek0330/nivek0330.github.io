'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "92a5f7bf7a44eab910c48dea7f202a48",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "0e67c6d8c16c55c8fa42d1d386a602c9",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "a5a56f1525003b9b95dbddac0b8e83a8",
"index.html": "8303bb197a4ea9a32f564d2959195d62",
"/": "8303bb197a4ea9a32f564d2959195d62",
"main.dart.js": "ccb715573ededd6c3a4a518ae1463a33",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9afbc632ef81a51cc7d0fc3ae0cbf5eb",
".git/ORIG_HEAD": "99ba26db5cf78ba7ee8b32ee6410cb4a",
".git/config": "70e7d29ef440dd20130789b0f19997ec",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/95/fd45052abb0ba0f1174b6807fba12b30e1f9a8": "d537b92fa20088124680b82bb358af67",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/66/18e0bf41686742fbb6a9b5ca3b58dbf53b89a7": "6d98ba8a9af8bdb827918956656dede0",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/57/eab66ab9ef025bd295b6fc7d4876feca7e89ab": "9ec805b2123572d46e33975358240c26",
".git/objects/57/febb5d5ddc7abaa8f117b51d23c7cb86980ac3": "7b6d0bed22aa4a83a87fea473b2cf016",
".git/objects/57/5ea680deaf241cd70cac703c5c7434b7482675": "f4c7a2a7bdf2c21151b0f7d94e991173",
".git/objects/6f/caf409794df3e7f9e992677891740abe1498fc": "cec360896a0cda2de778b0ec01915108",
".git/objects/6f/998c9723fdb2391a1f1722671160ffa257b328": "55d3aeee1f13b637f418494a92e578e3",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/03/1d08cb270d2bd1bfb4d1b4904763c740b2478b": "57ebc5ace8da1327ea52e12583eb978d",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/5a22db0616422f3d9b598f5ed9978ecd0f6045": "d6ea5f89d289f7de978e202f9187a0be",
".git/objects/9b/37f512ccda21f70f80d0dc6a264e8432747f51": "60e0cb0565412212125a78dd29150831",
".git/objects/9e/c9e2f5ec71957dafea0c598611965137eedae9": "ebd5146d68ad89170929bb487a7ab67f",
".git/objects/9e/687d8a59a90b8284e565a18d3433b63527d573": "344d947367c0e265aae8102198908808",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/04/87d49bfafecdcce09daaecb4c93587db29b9b5": "84bcfbf1dbcd3df153b6269a106a82d0",
".git/objects/04/90f0a142489dc3f785e8adc94f1490596c9863": "036c10e416adf986a9c4f0da3dca905e",
".git/objects/6a/a4d1932aeb0bba6ff1222549b1dc075842dce3": "a6a8949e24f5dd5f5fe24d737c926a87",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/32/493c4aa5b96f714df58ae0e4fd4319df4ca192": "fb56a71180bf3496b20c82e4c4ddb652",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/69/a93fd409c37a06a58da52fdfb04473ec771e3e": "343050cc0302f61b60cd11c10e9e7ff3",
".git/objects/3c/c05eb23491684aae1c51ce94668a142bad5125": "d7b0579a2c9bbcd5f15d386f2b10ecbd",
".git/objects/3c/472b99c6f3501ff93513bcdf39dabe4f236a55": "f1663221d4180a0bffd3a0a98ec3b762",
".git/objects/56/a148eda96c75f369a71da9c52f0e2babaf7933": "eca30dce691c14278e62e03909e4c583",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/42355c2a7bb6d39fff8d58bb0beff8053a3fc0": "17a27fed665a0309ab014adaba569ee7",
".git/objects/51/58e5fd006b4bc8b6f7636e3cd1ef3d1411c2dc": "3396a01c4337162038dd957cad89473f",
".git/objects/3d/ef27093236e1d2d8c46a64aef391086e9f96da": "eaf17693f9384b17aeabfc5759658deb",
".git/objects/3d/eda72743f32d866482fa78cfc81d5761e36e64": "fc443db3a134c9cdfe3f9c6a8a085210",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/67/a159f104b960d63575e56b9b3128d4f5dc8158": "93c93be9f16541e7adc36639781e0b08",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/0d2071a324ee6050cccd87a14495557b63416f": "27184823c9e5055a30e98ccf70968672",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/0e/f5b351aeccdb913652c1f41d5c5faca2838a64": "c5d6a3f4e7abc97bc86cb86809bb87d4",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/0e/12c46da19d8f4702f7152bc2d6e4a7ba8d7efb": "95cdded1da1220ee5f55978d5aa557ac",
".git/objects/0e/2730e22d18b47774815c0d11279f4d60157052": "510631f88a0060f125634636753dc8de",
".git/objects/60/5e9f1a55d95a50dc32ba8f6806001761d9af00": "7ed8340958e71df0c566ddb40fa2b261",
".git/objects/60/608d0fe5bff3a7a7e05d5a232944a1a8effe5f": "e213f83927c2a4c19aa1b864a19eb852",
".git/objects/60/989c5bed7f44d76d26277ac8568ef43f6c0183": "05ee57e03e67b9254b778e4e82ed8d2a",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/5a/9d3e98e8646147d5761165f04b166425dc10a1": "9fce0fc82bd4d60956d9836f8f3dd5d1",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/5f/27a4e2476fa67685c1d3b6d8d65242ba631f76": "bcb3f2c9d3c57851d314466157506e54",
".git/objects/5f/e026e14c4ecf78d2e888093478a62a08707bde": "af05e8bd801069459e5b5691a04cc0c2",
".git/objects/33/734d63d0704610a3cbd49d656b7691e1667897": "8559a0a7a8b5cacb350ceb53b0842615",
".git/objects/05/fee88a7ed13b46884b65a0758522aea48958d0": "c26f3d62e90a46b2ff983549349dd491",
".git/objects/05/79914241c3cb28836edd11ef2bf2fbcdd79b74": "92042366e582669fabfa1ad8f8e2f55b",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/9d/82f78915133e1c35a6ea51252590fb38efac2f": "a5f825ef45d7383d3866eae4bd5385f5",
".git/objects/9c/39119effe119f4cd9f6109eea28a1c3638c058": "6eea6006c8f41d095e00110a7de81b84",
".git/objects/9c/24697cd55ec3648b7f1e6c9b406de758cb6e8c": "eaf808bf8b5f8e4b865708451d9728ca",
".git/objects/02/2dfcf024fc2ba497e335d899259d6935c01516": "4b1713a4980ad2ad053e0735f5021448",
".git/objects/a4/2ea7687cb67e55af955dc8874a072e087ce3ed": "b51e31b93bc1bfcb23a9226ab3e3c5eb",
".git/objects/b5/b79a1681e703c4750a49a99218f3ef0ff8a4a5": "1c2e477be897f9dafa8ce5a8e8da295a",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/b08734db2bf90568fb1980bf46e0f42aea5856": "b1435b52c5abfab429aeb92797b5429b",
".git/objects/b2/5e363efa423f6d2dd97d425eb0f1364dbcbe3e": "2820837aa1faa39ed5cf46ba48151ff4",
".git/objects/bb/64eac3f718d28f5600ca3a55d17bd838ea6ce1": "2835b545570caa79b42c10f57440e5b9",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/7259ea5b48093f76198b37a34e331989b98d39": "9e559b1162655a7e9c3503676309bb11",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d0/4c80d5d035babe39a4d28f717780770e47c9f4": "81cc34c42dd23e54cf0b8d5c055262c6",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/0c271816403a679f3a732b324a190a18911625": "2090d0ebc5fa0ae63bd73181ae87ecae",
".git/objects/be/cd1461d14291ff213ab510626c6fe25d82613c": "6786847fd7b8833fa7e07df82249b219",
".git/objects/df/6443fb88df3177bad390f38994edf8095a88cc": "84ae7263747fb8c85f1d898abcdc9b1a",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/a2/44611e117e9cc06a1055d28b7c3946ea68e583": "28f973bc83ef8d15a4cba94e2e6b3c62",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a5/025d541468fc6025b9e8867848ceaf72230ce3": "785f0f2eaaae1ad8270aeaf1e4bde7d0",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
".git/objects/bd/7813a5d13990c413e6c57be1b6229603250913": "c91def86479b3aacb1478749e1248e58",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/07da9f6fe1a37133ab22e977c9145c1274435e": "e9e530cddb952e38891b60272c3ef230",
".git/objects/bc/dff2d22e9898b4f48f782a4974f790f4ce9df9": "8225657671fd86883132b0184ce78ea4",
".git/objects/ae/c99730b4e8fcd90b57a0e8e01544fea7c31a89": "13eea348c9e56a68acdc651a8ab894a8",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/bc24136d99a61ea0cdb8559b575049b52c13d5": "5027fab01a533c1540b84df0631138d1",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c9/a8049667bd64ee33a7b78fc1abb1609a82e69a": "096264cfb01d412c1f7739cb5c304c74",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/546bf7f0aa717fbc5b9c2549988a3ce498f8e8": "f997f8a0af72aee39c99eed3734fd025",
".git/objects/fd/2d6d32b87e0a6c23e238ad105047e7990a9537": "19cbec300c5f7b93bfd4c74c22a8575a",
".git/objects/fd/27c8518ddd65b3a5ac83d51b80283f8381a7d2": "15f01021a57d9f4199f638fc77337739",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/cf/b71a161c0032fbe1760d55b4b8f782c760d95a": "f8aea05968a9ef46f02653c06f796083",
".git/objects/cf/dd4ddf8bf386e6f85bf7276b099f7096bd8555": "7f01917c37a8294dd81b6d0f8634c8bf",
".git/objects/ca/023261428d2a0a3ef17bb6849040e91402c46d": "5878ea574f621acffd9b5b70759f13dc",
".git/objects/ca/85b4f97c7dcbcd9e87b00a4bcf4928bc5c0418": "fabb2efe2652eaa28eed9f8a644e7c42",
".git/objects/e4/2adcb34c2d30f4e7e4426422385dfa72f63114": "0521d186b437c93c9a91ef85aa62a476",
".git/objects/fe/4b58f60ded19c88f841feaa5d25d0e3ebe02fd": "656e9b761c59eb80ff06dabcae87af0b",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/objects/fe/93af63ad05b429379ef820519b5e707b3ebcce": "2fc1293766523277567321b21675723a",
".git/objects/fe/af1af9ed2cc259362964da71c0e25ba2879680": "82d906905fd98dfdb40896d66ef3afd4",
".git/objects/c1/86fca4a0570225be12b51cc4c6949ff0b7a164": "d54923ba8f18ae7ca83217d0eac68646",
".git/objects/c6/7a764f9b82f6d4e51c7e8e6ca86f14703d94e6": "c0a73253c40442974d26edba262c066e",
".git/objects/ec/5956d0ec8a7c80a5fdb803686250012bbab7bf": "3a300a47ebf9795887830c1689ee05e5",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/18/999696a6a38a49db82f0985800071ee2884f24": "15ff2aaff6fa253e9eb74b984ee2a81c",
".git/objects/27/d616ffb26ee4c4f9e39a0efbdceb92d5c55027": "fa0c0c3cc17b847427f30ba4734bb2c3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/79487aa832c4c2d599e813ee4703eac49117b5": "fd1d3f2051e2f0d070061cca40e7a3a8",
".git/objects/7d/e9c6cfd142f8cfa18a5267a2b2e3301b2001af": "aa1d4d51b9a4d2c18bf3291c5e6a26ef",
".git/objects/7d/412892bf0e477bec8435a10087ddff77dd513a": "a6e6ab7176f7d3ac62b259a6853de991",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/16/04e461ba17792767761bd687fe761b2ef3fd3c": "2cfb3ad498ed80fa51a77374bd8fa6e6",
".git/objects/16/315357366a29879923806e8a2d7ebf6c9e49c3": "e9d9d504b8beddf66bfcab62ecd21293",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/42/df4b9a99e0babee907d941d740a635d8210572": "924e6d0596ae2db1933bcb1b749c873b",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/45/88ae70f5a50077d192be615d77c1906c91a4e2": "04c98d4490a8a25e358a84cc905b65da",
".git/objects/73/e93bb45dbea4d7c5a678b13751974b2b6d9240": "661aa7d19880ece033d1c7d826dc573f",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/87/4c90504847ad835edd8f805b9592917f82531a": "4118a550d273b6ef1da6c29c9cb7097e",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/74/8f2105478696ad222e6535cd0d6b148ddc273e": "fc1fbdcb339a547dd817cb64191b2335",
".git/objects/74/3e86153928b713390bcd1bb33ac085a8796e03": "643ed99b4ce537302bc4156c7d0d1791",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/74/784d23e5e2a95ed96b65a8e0256e0d1c436194": "369dde8ef22ecbc8503ff79f11de22d9",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/17/3ec87b7b9b5fdf6266049b7a3657c74f2e8f98": "219c453d56efadc65e2891d24a5272f5",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/7b/213817ec08f930916fd5fbccc871cf6b230ebb": "18dd499494322ae7f2fcf2a827f7dc49",
".git/objects/7b/835db336feefdc66573eb27183374d4b22372f": "47decb3c8e41fdab43360be6234e4809",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/025ccc288b0420dd908ddbf0030ffef4a30e5c": "b39cffa0ed09e13db6e9988a5e98a767",
".git/objects/10/17ac7325092d914ac96ce06c462578185bba43": "4d707fde84ab00374cb5aff6c7bf4dc8",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/ef4609e419d565974304639dc70b7104683935": "abb9845ef82bbafdfabe422da5974c4e",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4c/ada10f0fbd35ca835f5c5d0cda62443ccb5da1": "e59fe9fc2e31d324849e2f6a2bca16d1",
".git/objects/26/67050196f7ffecee7743121ebd249c9e4bf74e": "5c254e3849acf8f5c6bffebd810cddd1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/9c046cc8b0e0b2d61c595183171a0d7511c73e": "670c82d4c01301e4c30e59facb31c964",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/86/a7c3b1b6119f7dbdb8cec74f1b5b3e076bf949": "6a613891f55546675267dc93a78ff2c1",
".git/objects/86/4a0d28df8a409f465690e62aa8ff814494248b": "fd309b67973388ea21187784c9f35afe",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/72/5128b82ed393a868c7ccc4899b1803961aa32c": "81068602a14378a8c2162f9e3d46c99c",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
".git/objects/43/00e61198ee18c90b66ba5683278533f939c599": "2ef53c7d49a927c29a93dafe029a5ef5",
".git/objects/88/d0bbb96db2eaece90083fb6a5e88c9d8302a76": "a63cafe58b4223ebdc08237b492a8929",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/244b9082600daf49b7ed0fb2abce46b10db78b": "ee2af4989c59e647d7380c280cf6a4d6",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/07/8a2792f3665cc9c94b0b259f0a7a89a996e130": "d9649aa180c64c22d0fb687180f54269",
".git/objects/07/33f0da2041dcf4ddc2026bd367137ce48f6771": "2e3efe01a27f0bdb9d4a959fa92ca1e8",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/38/b2cac5cb5ff68042460702855f1367d5b96911": "45ead7a9589afa74f3b2279d53d6d665",
".git/objects/00/8a59f64c20fcc39c2d62175f5aa8a5c592575a": "7d6aef337b2b29204618fcda891d8e04",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/9a/2d464b7874262d818f91778f6929510edcd70c": "25193f21bdd03c4c7c62c7da84a8f474",
".git/objects/9a/be9f77755d4b4126e1f1da2d237fedb3d94648": "f7f8ed4a9268ddcfbdb83ff49786f926",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/5c/2bdddf2d6d250560eff911be4cce779c234ebf": "0c010134125e8047c668c4d8376ec6bf",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/09/c32aab239a1190ed2469bd571ed50ba31a251b": "e81b9cb0d2aed6dc65b07aa3c5376a13",
".git/objects/09/88e65c4035c7d73815911264fe285cb0826be1": "54df0ae7375e4d9709064e358fc725e1",
".git/objects/91/d1d51f462ba57f5902693a2993d5a11319371f": "71781cfb3d6667246b070dbbe50857a6",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/25e105df39e8429814f3189a8015087720cba1": "dc4647a7fac13cea763bcd9ca601edf5",
".git/objects/96/290125c97462868536e30a77505e0f981568a0": "07175b20d8bc637c194cd2341e349f16",
".git/objects/96/fe3a29d30806a04f9f718ff111f2a50d977811": "34abd9dd0246c2d51c6b040876325a64",
".git/objects/96/218508f99de903434008054f99978a61b3c2d4": "c37e201cc8df362089e4ea6f87e08c62",
".git/objects/96/8025bc15d615298d71cc6798a6fb0c23740a96": "f75b56fdfa11e7ca7a1b44bc822c23a4",
".git/objects/3a/28e3e3062157c1fea92b9573b23a8f9783ea34": "65be4da4a1977adb8b585211a1bed8fc",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/54/18c9f5395573cfd0fb8290b7ac946030f11ec6": "6b7c566b22549c2ea8f5f843db3bdac8",
".git/objects/98/89ffdf3c1f859a3cd21e06391582f3ce432213": "326fe2e93485d437cd507db37886d219",
".git/objects/98/125de0c0c4964a93bbf6b7be36c9d1ac2deca4": "7e10c7465d94ffaf5cfa0e2dd7e84e0b",
".git/objects/53/9ab022f2119642b2f43980e37176e6e4ab05ff": "9722447dc3e1a35a2b7176950f61ae92",
".git/objects/30/d90a7ef8bab12bb4d23be63f02b531ccad29cb": "4e229ae790c4352295208d9af12be907",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/81a4442ef5a4ac59cc8756b2db505459c49fe0": "61e68955946a4915b10e1386fccad92a",
".git/objects/5b/99c0d84566498586182d511ac7bab8c3ee7f0e": "a166574a8af1fa57a4b7b421a218c70f",
".git/objects/5b/7b3af968a27d39abb938f526d892caf08c6bb2": "83fc0b68c1253c834cedc120d0ec639f",
".git/objects/5b/3388cc1afe59399989af57ab870fba219cf804": "adb93a4c8546837b314b2f863fc1d748",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/08/476553711766376c9f899ab5badee94ba461f1": "ba334be39e5cf822651f9010858dc9c8",
".git/objects/6d/577d680c84bc3ad7136fdfa91fd85df378f410": "40deade42e41d908c082bf55eb2fbe09",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/6c/f02180290623d49bd18dd54db89598387edf92": "e28d9d7a27d40b277c3dc8c3d63ff8dc",
".git/objects/6c/1c9e394ecd372e11c273e524955c0c2b6669c9": "48ffa0f6eae964ae64c6d53bd8924b68",
".git/objects/6c/4fd38c6aa837fff25d1f96827676360417d7b0": "55457149f3544ac8a2270951192ce016",
".git/objects/6c/37986941e4ece82225a60e2b360bb7eb3bafbc": "f130d9f98ff766eb800ce28054a20920",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/39/70f665a0e3572fe5cf87fc2bbf3377f6aa7637": "d5b02911520379e97e858d110f4ca0ef",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/39/9f6981d5d35475eb18e6068ae67cdd7c731978": "d78434eb583745d7bf880eb7c4b9f3e2",
".git/objects/99/0e4220ccc49d5b7cb88d6d5e3375b65bd29b4e": "06a65dd85ce8ebfec70a403035f9a663",
".git/objects/99/0df0549bcc76bb9d8f0de9e066d337de97d0ce": "e438e0b890a99652d59df6f5178998e8",
".git/objects/52/f0a2ffc4af502f517973853c39aa3eeb2bd7e0": "8629ecc446d0faf4f3c56690c1f5ca3b",
".git/objects/52/9fdcd511dd4cb4117a3230bbca21f2a200f07c": "0e05cf33ee11af0aba0650827fc89a22",
".git/objects/97/2e2c07fa67239c99e968fb33a6a6f6dbf8bd12": "dfe19c25e64b54d6e19dbbfe69557549",
".git/objects/63/5a9aa6e25868c6f6573045e8a98809a01bb9e6": "c0eb6b6259e1db54e0b5b80e874b784f",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/0f/dd4fdad422c3ddee91c45f4a47d80d166c2490": "e465edb9bd6ecbbd5aedb31ef7839d37",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
".git/objects/64/23d0a1754313c50ab39e2ddaa8f3d74892134b": "dec1800386794d7c316af2e4a78e0d27",
".git/objects/64/fe3236016f9f9052b843fcdd315df084bc3ce7": "9c8e6e9e163b9a8c7ce2c87d902a8622",
".git/objects/64/e6fb4aebc8f3d48718c859dfb1369491bf57e1": "67c896720f9b8f8922ea656d643e5582",
".git/objects/64/35c65440662b7a656ef98832aacb5b0b6f93e3": "3658f753542e4521f133cdca225e59c4",
".git/objects/90/adf378e402a52967179aa71be13872caf28153": "cbb3aa25eb082ae9f9c6b70f01bf3fcc",
".git/objects/bf/e58d24d95f289e374acdb621f39260229e1eda": "308d1eef4694c6590dc68c7d6a0e8b92",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a0/4793e357076c0b713148d39c488bda6c0ab720": "b06383d1dd6003e4d5ca54b32d15d8a1",
".git/objects/a0/01f8ff75a0c1d803e1a14a4d39ec36011606f8": "3fb8e3dc5fa6f31c41218d9a3fa6f95b",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a7/726fbad038c38a2d7f2edea14f7b1a46243c50": "4b12db77048167f0f857fb36396183ad",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/dd/a55548ef4b237f8d0993f6c0475201eb9ab40a": "a20f1919343d961db13f8c5676953952",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dc/5a365b6ccdb4beefb77219d82c562293e9d42f": "bf151944bdf183ed44396792f7460648",
".git/objects/dc/05b234ddc78fb8779d728c9db0ace173a14765": "291d2378272ca0770c24566bc3857ec4",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/dc/46d85ac8df96db37e6c9622f7e773b824de8e8": "03bce1c9c52f11ad258e94719bd8c1e1",
".git/objects/b6/62348303470995581c87a0458b7705567b3302": "c31f679e5fda3a51ad2ef251447cfa1d",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/3ef6437726b9d1558eda97582804175c0010a2": "764cc945f02614c5bb082a403a0c55e0",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/b7b5cd8325696835286f195527e16ffb1f675a": "0d8d9b7eecd0a6c366a36a9db157ff8b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/0c9ed8eaed7eeea1215c61a7f4218e6a17b890": "fef2b5648a1acadb7a126f9d602eddfa",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "ee36831733b04277c6a77d9ebfa7d16c",
".git/objects/de/86c98a0ca9f92d4e207dac201b9ae20ea27463": "0447d7d0c219c1ecab64eddd7f95e789",
".git/objects/a6/19843f55e60c2fc168fe9f0afc867c44799a04": "62cce156a87ced41bad31aa355bf32df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/b9/44b4ec24a98850f5599d6795fcfa08874e080e": "bd36b5019f02ea0928bdb6d702c45582",
".git/objects/ef/e65ecccf693ff20ed7d92b7a75e0a67396dbfa": "1d5cb6d04ba1e34ab3a1d65349caaa36",
".git/objects/ef/e0be9d1dead299864c4f73e349f48a66e71ed1": "adea835ce7156c6e0b441b0ab886b1be",
".git/objects/c3/60c22f52b715c250ff7ff443ab697988ce8f21": "df734bc79387a0e585c65ed190f1a40f",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/3db629b58f3d425dd071cdcfcce513ef0f6fa5": "f1bfd4353fe142b2cbe9311be770d071",
".git/objects/ea/0f3cc8f12bed36c7acebfdd0e9fc738406ec8b": "66e20bed04b161a159623c6a35e80b21",
".git/objects/e1/e9d1e05f8941372f74af73a4d7f33b6d738dad": "74f7f1210c03af090315f9f1e7df2706",
".git/objects/e1/24fe4f3a1151c530724d2e102d9e156896c8f9": "dbdffe21051238a0c57d6f4e13251cb7",
".git/objects/cd/5aa6af2e96078d8f47feb59ba177d82fb28f5b": "a2cf1458801a5c2ad0720898adba0441",
".git/objects/cd/3c5ec15db63e32d6ea2b4af378c983d3dcf6b7": "7e90c3ffd034d127bd0ef30182dc3be7",
".git/objects/cc/576f888a925fb53bbeb37cac70a0951471cfc0": "bdc50735e35a2750b2d998c9114fa618",
".git/objects/cc/bc20f539946fb56e1f34f5a778f0c2e35a518e": "3a2312386a91fefb3a2d4d7e83f0ea60",
".git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "1b4dd6ab7f4ca9073eac414dd6794fd6",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
".git/objects/f7/18070279b94f9401486fda9ddfd2bd2e522906": "3c5a72925ee5961905c7af2a1dbed930",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f7/eb7f63ce1ad867f97420fbdc50a51f965adab4": "b40fdd49d2c28e49b9b549ed7f4fcd27",
".git/objects/e8/2225dcf6e6dbce72abfd1731e12bf5223a36b1": "6371a38c323f4b5cdbac9dd024b4c6da",
".git/objects/c5/43f722554695a7047508358ed823e8914efd21": "62a83cca0b2caadf6abd70b607d85cf4",
".git/objects/c2/2ee77e8ac031a7f9fe3c0062e0b3a5f986773f": "5ad10c3399277da6f829deb06b89a48f",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
".git/objects/f6/6303d5303cad853ed5f0cbceeb742c6bc9a025": "7602d386264ed46f4c0c251eff8fd776",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/e9/01dde684ea8ba25c50ea5dc7d5900da31a30d4": "8688207d9bdc19977b061c06f0972db7",
".git/objects/f1/7f7156927bd249d420db03e68a8591166720e1": "eab2ca126608cd5386349a720424a0c9",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e7/103bcab164fa0a52b12f0ecc7d8b2b6b01ade2": "7911bf27b66edcf87a7af8864ba3718e",
".git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "35049fca5b8153e0c0cd520b5503c269",
".git/objects/e7/95f75320eed3f9baeac82001c4d80e02d8f763": "1aee860ef974cfad316b3e873364ea40",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/ce/eccc1431325204ad0d32dfd1ef01c20d406ac3": "9857139b30d0d975b8428d3f4904f20a",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e0/2aedb13380ab64c347aea7541ec7a549e61e59": "05eb22899e22a0b42a3bf8acda624514",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/46/5304a7fb54aa3266b712e270a33337c510b35f": "66d542a3d99f8d69fa52987af127de5b",
".git/objects/2c/127406d2f1e1d96c7bd138fbde25776dccc03b": "38b248182f8136fcd446a66a2ca9d093",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/2d/ca7ca4eec78466ee2cb0f8c57108cffb4e89f3": "dd916b7fb82e33c20371013412336561",
".git/objects/2d/68e5cf1b45ee5c750602ec80f575a5ded273ad": "edb829f80d64e3ea0dc2f3ef7a199394",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/83/67ba11b8f5df087e04ea98f7ca4cc871b7579e": "c2850a9ec1a3553bf6ebb1f6e6b2482d",
".git/objects/1b/2d28c4ea52ff6cc3ab4a1fde7241f497272d92": "f4897ac321c277864667b2fee0d0762f",
".git/objects/1b/38483200667912ccf0fa819090b00217868c24": "4a7bd30cb35a43dc41100b898aaaa9d5",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/77/681f469c9b9a74f4b9c2acb5e4a76be617e44b": "76c325c24d397756430a0300e7d7077b",
".git/objects/48/f0af53ac04e8ae47fc800abddd7a9898d1bd4a": "8ca2c139d142bd6fe5499904aadaf19f",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/70/9159ef493c288b52acb1d2af94e38f8cee9e7b": "05a657d0cd1d298261a10abb8e92b38a",
".git/objects/70/23d75cb1e80d238d9a28e539f5d49aa5da09e6": "3136a16e26662421d4fe6cf340a36cb0",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/24/aa2a34c65793859df2d336db4d6eec0f7086c1": "22c3ab396e669d4e739102ab57129c68",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/23/87d10e4477ea2d7a64b753e0cf35abf53970a2": "83512ed3f9211070b006e8c9ee37b5c5",
".git/objects/4f/51b335bc025ec1fbde1ad4bce869f713a697a9": "a813133ef253a84acbcbe9fa6064f1df",
".git/objects/8d/affabb4fa9c58c8efa1a4e8b3d1f281942ae28": "3a47bafb8e680c504a2c1fb640e11139",
".git/objects/15/99e4176cdc6ba06682313046972446c5d6bb47": "9f9803d15d538662be2951a34a73d211",
".git/objects/15/3527699c6dbc633bc350ff4c10ec8f09fd5992": "083a2e8e24b7a85311aa6dd66328930c",
".git/objects/15/be13ed6975ee1be48a6816c126502640848d53": "06aef93eba29f8ae9c78bda45643692c",
".git/objects/12/2e83d9ceb155dd1052409ed09247df73ac9fcc": "9c14ea0f7d2d27d342bd5e93173a857f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/b8ff3556331b29a347ac5242712dd93f04d4fa": "bfe2baa32501bd2344aabc6fccfd0c62",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/1c/5b6296a47c2d1c1b6fbcaa6bb531a075090eae": "e7e6c3677064d6645894f851ca053c7b",
".git/objects/1c/4cfdd96a89b0095dbd29a6ca194e41ad77b4fd": "941033f2f51333a5217c535046bbd8e2",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
".git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "f4970286a19c04f87217910d26430ddf",
".git/objects/2b/96ac4b75c02b556cd5829e3d9e2fa629342b12": "18e9b461987ce9a0ed410d0e376f6e24",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
".git/objects/13/bca89437586d781821e92c7fd589c6a512f043": "8d558267c5b62f80296b680105b01731",
".git/objects/13/372aef5e24af05341d49695ee84e5f9b594659": "25f9120053c5b7f90eda0b5f3958052a",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7a/890927193a6afc8964af7a04450db64a3ba4d9": "3481a677c30c824c472c0ee25d6fe465",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/14/1d9a61b71abc5839412b2cde5a562ecabb912e": "5297fa4b8ac64ae3e25da4029c84b0b2",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/70840568da9878d3a55a8473799c162e547ded": "dd8e8fd5baec85b83aeefbd6481392f2",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/22/544dbbf2aec7db7437b5ea48706694c6b78420": "0492c6ad4c2eead7163524a322d9e6aa",
".git/objects/22/de754253b725a13e861213df2dd5a3982067ef": "1372620d53c4c5cec5f6a62e4029bbcd",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fcc45f8ca4196edc9872c72b1bb9c15e",
".git/logs/refs/heads/master": "fcc45f8ca4196edc9872c72b1bb9c15e",
".git/logs/refs/remotes/origin/master": "1837950fcf1a45fe12410ee11c54cfe7",
".git/logs/refs/stash": "d1fa2e588de91e843d941a01f47fcbae",
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
".git/refs/heads/master": "2e7c13160f015890c69661aa40ba4bb8",
".git/refs/remotes/origin/master": "2e7c13160f015890c69661aa40ba4bb8",
".git/refs/stash": "362e7a0f710f09b7cb2a9c56058f77bf",
".git/index": "3f23ea1709ec074c50552d458cf6c857",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "37ea404672d88463789c29815603587c",
"web.iml": "731a1a3080009db8d4572ef3fb1679c3",
"assets/AssetManifest.json": "44e6485e9e32eee7ff1c3c638a70de5f",
"assets/NOTICES": "5467fea57645e3b2a050c24d42b85a2d",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "9f5010cb0fd56a7224aab393936951e1",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/logos/instagram_logo.png": "b84eb7815cc00ce442108e9ca625c971",
"assets/assets/logos/tiktok_logo.png": "15c3218cd24dc5385b9185b8c215b68c",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
