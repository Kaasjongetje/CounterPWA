<script lang="ts">
  import "./style.scss"
  import UpdateModal from "./UpdateModal.svelte"

  let count: number = 0
  let updateAvailable: boolean = false

  document.addEventListener("custom:updateavailable", () => {
    updateAvailable = true
  })

  function increment(): void {
    count++
  }

  function decrement(): void {
    count--
  }
</script>

{#if updateAvailable}
  <UpdateModal />
{/if}

<span>{count}</span>
<div class="button-container">
  <button on:click={decrement}>
    -
  </button>
  <button on:click={increment}>
    +
  </button>
</div>

