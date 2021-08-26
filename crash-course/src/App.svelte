<script>
	const name='<b>Debasis</b>'
	const id='text';
	let num=0
	
</script>

<main>
<h1>Hello Debasis</h1>
{@html name}
<h2 {id} >Heading</h2>
{#if num===1}
<h1>Hello 0</h1>
{:else}
<h1>Not 0</h1>
{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		/* height: 100vh; */
		border-radius: 5px;
		margin: 0 auto;
		/* background-color: rgb(10, 10, 10); */
	}
	#text{
		color: red;
		font-size: 2rem;
	}

	h1 {
		/* color: #201f1f; */
		text-transform: uppercase;
		font-size: 5em;
		font-weight: 500;
		background: -webkit-linear-gradient(rgb(240, 135, 135), #333);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
