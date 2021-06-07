<script>
import Nav from '../components/navbar.svelte'
</script>

<Nav/>

<div class="p-8 max-w-6xl mx-auto">
    <slot ></slot>
</div>


<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>