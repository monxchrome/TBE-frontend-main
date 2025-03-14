<script>
	import Nav from '$lib/Header/Nav.svelte';
	import Auth from '$lib/Header/Auth.svelte';
</script>

<header class="header">
	<Nav />
	<Auth />
</header>

<style>
	.header {
      background-color: #1A0606;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
	}
</style>