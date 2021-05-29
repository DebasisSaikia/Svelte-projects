<script>
  import Card from "./Card.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let poll = [];

  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA);
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB);

  const handleVote = (option, id) => {
    dispatch("vote", { option, id });
  };
</script>

<div class="poll">
  <h3>{poll.question}</h3>
  <p>{totalVotes}</p>
  <div class="answer" on:click={() => handleVote("a", poll.id)}>
    <div class="percent percent-a" style="width:{percentA} %" />
    <span>{poll.answerA} ({poll.votesA}) </span>
  </div>
  <div class="answer" on:click={() => handleVote("b", poll.id)}>
    <div class="percent percent-b" style="width:{percentB} %" />
    <span>{poll.answerB} ({poll.votesB}) </span>
  </div>
</div>

<Card />

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #f7f4f4;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.8;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    width: 25%;
    background-color: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    width: 75%;
    background-color: rgba(69, 196, 150, 0.2);
  }
</style>
