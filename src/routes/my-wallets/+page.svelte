<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const {wallets, pagination} = data;
  </script>

<ul>
	{#each wallets as wallet}
		<li>{ wallet.name }</li>
	{/each}

	<pre>{pagination.page} {pagination.perPage}</pre>
</ul>
