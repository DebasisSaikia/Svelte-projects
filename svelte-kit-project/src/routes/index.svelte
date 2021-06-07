<script>
    import {pokemon} from '../stores/pokestores'
    console.log($pokemon)
</script>
<svelte:head>
    <title>Svelte Kit -Homepage </title>
</svelte:head>
<h1>Svelte Kit Project</h1>
{#each $pokemon as pokeman }
    <p>{pokeman.name}</p>
{/each}


