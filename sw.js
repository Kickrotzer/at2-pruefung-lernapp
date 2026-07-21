const CACHE="at2-pruefung-v1";const F=["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png","./apple-touch-icon.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(a=>{const c=a.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return a;}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(t=>t||caches.match("./index.html"))));});
