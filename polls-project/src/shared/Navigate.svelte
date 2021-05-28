<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<div class="navigate">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch("navChange", item)}>
        <div class:active={item === activeItem}>
          {item}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .navigate {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li {
    font-size: 18px;
    margin: 0 16px;
    cursor: pointer;
  }
  .active {
    color: orangered;
    border-bottom: 2px solid orangered;
    padding-bottom: 8px;
  }
</style>
