<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore";
  export let polls = [];

  PollStore.subscribe((data) => {
    polls = data;
  });
</script>

<div class="poll-list" />
{#each polls as poll (poll.id)}
  <PollDetails {poll} on:vote />
{/each}

<style>
  .poll-list {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
