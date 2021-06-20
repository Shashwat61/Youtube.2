const CACHE_NAME='cache-v1'
const preResources=['index.html','offline.html']

const self=this

//install serviceworker
self.addEventListener('install',(e)=>{
    console.log('service worker instal event!')
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log('opened cache')
            return cache.addAll(preResources)
        })
    )
})

//activate serviceworker
self.addEventListener('activate',(e)=>{
    console.log('service worker activated event')
const cachewhiteList=[]
cachewhiteList.push(CACHE_NAME)
e.waitUntil(
    caches.keys()
    .then((cacheNames)=>Promise.all(
        cacheNames.map((cacheName)=>{
            if(!cachewhiteList.includes(cacheName))
            return caches.delete(cacheName)
        })
    ))
)
})

//listen for request
self.addEventListener('fetch',(e)=>{
    console.log('fetch intercepted for:',e.request.url)
    e.respondWith(
        caches.match(e.request)
        .then(()=>{
            return fetch(e.request)
            .catch(()=>caches.match('offline.html'))
        })
    )
})