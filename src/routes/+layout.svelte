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

	:global(html) {
		$tc-lightgray: #edf6f9;
		$tc-brown: #e29578;
		$tc-lightbrown: #ffddd2;
		$tc-green: #006d77;
		$tc-lightgreen: #83c5be;
		$tc-black: #212529;
		$tc-white: #f8f9fa;

		font-family: sans-serif;
		color: $tc-black;
	}


	.app-main {
		padding: 10px;
	}
</style>
