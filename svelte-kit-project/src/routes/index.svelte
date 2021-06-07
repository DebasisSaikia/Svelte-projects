<script>
	import { pokemon } from '../stores/pokestores';
	import PokeCard from '../components/pokeCard.svelte';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		console.log(searchTerm);
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit -Homepage</title>
</svelte:head>

<h1 class="text-4xl text-center font-bold my-8 ">Svelte Kit Project</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	bind:value={searchTerm}
	id="search"
	placeholder="Search "
/>
<div class="grid gap-4 md:grid-cols-3 grid-cols-1 py-4">
	{#each filteredPokemon as pokeman}
		<PokeCard {pokeman} />
	{/each}
</div>
