import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchData = async () => {
	const api = `https://pokeapi.co/api/v2/pokemon/?limit=150`;
	const res = await fetch(api);
	const data = await res.json();
	const loadedData = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemon.set(loadedData);
};

fetchData();
