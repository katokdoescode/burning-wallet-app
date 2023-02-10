<script lang="ts">
	import Wallets from './wallets.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { wallets } = data;
</script>

<section>
	<Wallets items={wallets} />
</section>
