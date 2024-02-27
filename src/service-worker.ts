/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope

const VERSION = "3"
const STATIC_CACHE_NAME = `static-v${VERSION}`

const STATIC_FILES = [
    "/",
    "/style.css",
    "/script.js",
    "/manifest.json",
    "/small-icon.png",
    "/large-icon.png"
]

sw.addEventListener("install", async (e: ExtendableEvent) => {
    const cache: Cache = await caches.open(STATIC_CACHE_NAME)
    
    e.waitUntil(
        cache.addAll(STATIC_FILES)
    )
})

sw.addEventListener("fetch", async () => {
    const keys: string[] = await caches.keys()
    const keysToDelete: string[] = keys.filter(key => key !== STATIC_CACHE_NAME)
    keysToDelete.forEach(key => caches.delete(key))
})

sw.addEventListener("fetch", async (e: FetchEvent) => {
    const requestedFile: string = new URL(e.request.url).pathname

    if(!STATIC_FILES.includes(requestedFile)) return

    async function getResponse(): Promise<Response> {
        const cache: Cache = await caches.open(STATIC_CACHE_NAME)
        const cachedResponse: Response | undefined = await cache.match(requestedFile)

        if (cachedResponse) {
            return cachedResponse
        } else {
            const networkResponse = await fetch(requestedFile)

            if (networkResponse.status === 200) {
                cache.put(requestedFile, networkResponse.clone())
            }

            return networkResponse
        }
    }

    e.respondWith(getResponse())
})

sw.addEventListener("message", (e: ExtendableMessageEvent) => {
    if (e.data === "SKIP_WAITING") {
        sw.skipWaiting()
    }
})