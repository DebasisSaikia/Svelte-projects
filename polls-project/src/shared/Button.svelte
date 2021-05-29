<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: 500;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background-color: orangered;
    color: #fff;
  }
  .secondary {
    background-color: palegreen;
    color: black;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color: orangered;
    background-color: #fff;
    border: 2px solid orangered;
  }
  .secondary.inverse {
    background-color: #111;
    background-color: palegreen;
  }
</style>
