<script>
	import Header from '$lib/Header/Header.svelte';

	let { children } = $props();
</script>

<Header />

<main class="container">
	{@render children()}
</main>