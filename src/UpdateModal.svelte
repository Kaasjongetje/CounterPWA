<script lang="ts">
    import { onMount } from "svelte";

    let updateModal: HTMLDialogElement
    
    onMount(() => {
        updateModal.showModal()
    })

    async function onUpdateConfirm(): Promise<void> {
        const registration: ServiceWorkerRegistration | undefined = await navigator.serviceWorker.getRegistration()
        registration?.waiting?.postMessage("SKIP_WAITING")
    }

</script>

<dialog bind:this={updateModal}>
    <p class="main-content">
        There is an update. Do you want to refresh right now?
    </p>
    <p>
        You can always update later if you don't want to it immediately
    </p>
    <button>
        No
    </button>
    <button on:click={onUpdateConfirm}>
        Yes
    </button>   
</dialog> 