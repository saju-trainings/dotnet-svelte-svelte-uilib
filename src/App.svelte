<svelte:options tag="my-app" />

<script>
  import MyCounter from "./lib/Counter.svelte";

  let counterElement;

  function handleIncrement(event) {
    console.debug("handle increment ", event);
  }

  function handleIncrementParent(event) {
    console.debug("handle increment parent:", event);
  }
</script>

<main>
  <div>
    <h1>My App</h1>
    <div class="card" on:increment={handleIncrementParent}>
      <my-counter
        on:increment={handleIncrement}
        color="custom color"
        bind:this={counterElement}
      />
    </div>
  </div>
</main>
