<script>
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  let name;
  let food;
  let age;
  let skills = [];

  const handleForm = () => {
    const person = {
      name,
      food,
      age,
      skills,
      id: Math.random(),
    };
    dispatch("addPerson", person);
  };
</script>

<form on:submit|preventDefault={handleForm}>
  <input type="text" placeholder="Name" bind:value={name} />
  <input type="number" placeholder="Age" bind:value={age} />
  <label>Skills</label>
  <!-- <input type="checkbox" bind:checked={react} />React js <br />
  <input type="checkbox" bind:checked={next} />Next js <br />
  <input type="checkbox" bind:checked={node} />Node js <br /> -->

  <input type="checkbox" bind:group={skills} value="React js" />React js <br />
  <input type="checkbox" bind:group={skills} value="Next js" />Next js <br />
  <input type="checkbox" bind:group={skills} value="Node js" />Node js <br />

  <label for="food">FOOD</label>
  <select bind:value={food}>
    <option value="chicken">Chicken</option>
    <option value="pizza">Pizza</option>
    <option value="noddles">Noddles</option>
  </select>
  <button>Add Person</button>
</form>
