<script>
	const name='<b>Debasis</b>'
</script>

<main>
<h1>Hello Debasis</h1>
{@html name}
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
