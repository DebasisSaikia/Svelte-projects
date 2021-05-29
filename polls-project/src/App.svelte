<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Navbar.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import Navigate from "./shared/Navigate.svelte";

  //   navigations
  let items = ["Current Polls", "Add new"];
  let activeItem = "Current Polls";

  const navChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    console.log(polls);
    activeItem = "Current Polls";
  };

  const handleVote = (e) => {
    const { id, option } = e.detail;
    let copiedPolls = [...polls];
    let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

    if (option === "a") {
      upvotedPoll.votesA++;
    }
    if (option === "b") {
      upvotedPoll.votesB++;
    }
    polls = copiedPolls;
  };
</script>

<Header />
<main>
  <Navigate {items} {activeItem} on:navChange={navChange} />
  {#if activeItem === "Current Polls"}
    <PollList on:vote={handleVote} />
  {:else if activeItem === "Add new"}
    <PollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
