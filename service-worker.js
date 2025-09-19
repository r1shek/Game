self.addEventListener('install', e=>{
  e.waitUntil(caches.open('pwa-v1').then(c=>c.addAll([
    './','./index.html','./manifest.json','./service-worker.js','./prompts.json','./icons/apple-touch-icon-180.png'
  ])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});