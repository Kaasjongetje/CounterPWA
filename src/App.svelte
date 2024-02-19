<script lang="ts">
  import "./style.scss"

  let count: number = 0

  function increment(): void {
    count++
  }

  function decrement(): void {
    count--
  }
</script>

<span>{count}</span>
<div class="button-container">
  <button on:click={decrement}>
    -
  </button>
  <button on:click={increment}>
    +
  </button>
</div>

