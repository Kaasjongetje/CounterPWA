import App from './App.svelte'

export default new App({
  target: document.body,
})

if ("serviceWorker" in navigator) {
  window.addEventListener("load", setupServiceWorker)

  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload()
  })
}

async function setupServiceWorker(): Promise<void> {
const registration: ServiceWorkerRegistration = await navigator.serviceWorker.register("sw.js")

dispatchUpdateAvailableIfNeeded(registration)

registration?.addEventListener("updatefound", () => {
  registration.installing?.addEventListener("statechange", () => dispatchUpdateAvailableIfNeeded(registration))
})
}

function dispatchUpdateAvailableIfNeeded (registration: ServiceWorkerRegistration): void {
  if (!registration.waiting) return

  document.dispatchEvent(
    new Event("custom:updateavailable")
  )
}
