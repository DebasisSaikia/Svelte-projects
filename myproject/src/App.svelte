<script>
  import Modal from "./Modal.svelte";
  import AddPerson from "./AddPerson.svelte";
  let showModal = false;

  const toggle = () => {
    showModal = !showModal;
  };

  let firstName = "Debasis";
  let lastName = "Saikia";
  let para = "Svelte";
  let beltColor = "black";

  const handleClick = () => {
    para = "Svelte ,React and Next Js";
  };

  const handleInput = (e) => {
    para = e.target.value;
  };

  //   reactive values
  //   $: fullName = `${firstName} ${lastName}`;
  //   $: {
  //     console.log(beltColor);
  //     console.log(fullName);
  //   }

  //   loops
  let people = [
    { name: "Debasis", food: "Pizza", age: 24, id: 1 },
    { name: "Pari", food: "Chicken", age: 25, id: 2 },
    { name: "Tulip", food: "Noddles", age: 22, id: 3 },
  ];

  const handleDelete = (id) => {
    people = people.filter((person) => person.id !== id);
  };

  // conditionals
  let num = 5;
  const addPerson = (e) => {
    const person = e.detail;
    people = [person, ...people];
    showModal = false;
  };
</script>

<Modal isPromo={true} {showModal} on:click={toggle}>
  <div slot="title">
    <h3>Add new items</h3>
  </div>
  <AddPerson on:addPerson={addPerson} />
</Modal>

<main>
  <!-- <h3>{`You will learn ${para} soon`}</h3>
  <button on:click={handleClick}>Update the Values</button>
  <input type="text" on:input={handleInput} value={para} /> -->
  <!-- or short cut for two way data binding -->
  <!-- <input type="text" bind:value={para} /> -->
  <!--two way binding -->

  <!-- ================ using reactive values -->
  <!-- <h1 style="color:{beltColor}">{fullName} loves {beltColor} color</h1>
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <input type="text" bind:value={beltColor} /> -->

  <button on:click|once={toggle}>Open PopUp</button>

  <!-- looping -->
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      {#if person.food === "Chicken"}
        <strong>Non Veg</strong>
      {/if}
      <p>{person.age} years old and loves {person.food}</p>
      <button on:click={() => handleDelete(person.id)}>Delete</button>
    </div>
  {:else}
    <p>Nothing to show .....</p>
  {/each}

  <!-- conditional loop -->
  {#if num > 20}
    <p>Greater then 20</p>
  {:else if num > 5}
    <p>Greater than 5</p>
  {:else}
    <p>Not greater than 5</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 200;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
