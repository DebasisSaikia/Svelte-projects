<script>
	export let pokeman;
</script>

<a
	class="p-8 bg-gray-200 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokeman/${pokeman.id}`}
>
	<img class="h-40" src={pokeman.image} alt={pokeman.name} />
	<h2 class="uppercase text-bold">{pokeman.id} {pokeman.name}</h2>
</a>
