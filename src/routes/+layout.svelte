<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main  class="app-main">
	<slot />
</main>

<Footer />

<style lang="scss">
	.app-main {
		padding: 10px;
	}
</style>
