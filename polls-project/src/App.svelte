<script>
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Navbar.svelte";
  import Navigate from "./shared/Navigate.svelte";

  //   navigations
  let items = ["Current Polls", "Add new"];
  let activeItem = "Current Polls";

  const navChange = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Navigate {items} {activeItem} on:navChange={navChange} />
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
