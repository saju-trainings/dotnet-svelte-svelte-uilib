<svelte:options tag="my-counter" />

<script>
  export let color = "blue";
  let count = 0;
  // let element;

  const increment = (e) => {
    count += 1;

    const event = new CustomEvent("increment", {
      detail: {
        count: count,
      },
      bubbles: true,
      composed: true
    });

    const target = e.target;
    const result = target.dispatchEvent(event);
  };
  
  function handleIncrementSelf(e) {
    console.debug("handle increment in self", { e });
  }

  function handleIncrementLocal(e) {
    console.debug("handle increment in local", { e });
  }

  function handleIncrementLocal2(e) {
    console.debug("handle increment in local 2", { e });
  }
</script>

<div class="box" on:increment={handleIncrementLocal2}>
  <div class="box" on:increment={handleIncrementLocal}>
    <p>Color (in svelte): {color}</p>
    <button on:click={increment} on:increment={handleIncrementSelf}> Increment </button>
    <p>
      Count is {count}
    </p>
  </div>
</div>

<style>
  .box {
    border: solid 1px;
    padding: 1rem;
  }
</style>
