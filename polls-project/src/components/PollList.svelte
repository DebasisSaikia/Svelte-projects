<script>
  import PollDetails from "./PollDetails.svelte";
  import { flip } from "svelte/animate";
  import { fade, slide, scale } from "svelte/transition";
  import PollStore from "../stores/PollStore";
</script>

<div class="poll-list" />
{#each $PollStore as poll (poll.id)}
  <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
    <PollDetails {poll} />
  </div>
{/each}

<style>
  .poll-list {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
