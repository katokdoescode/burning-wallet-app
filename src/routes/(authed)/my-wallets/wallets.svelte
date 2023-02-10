<script lang="ts">
	import type { WalletRecord } from '$models/WalletsModel';
	export let items: Array<WalletRecord>;
</script>

{#if items.length}
	<ul>
		{#each items as wallet}
			<li>
				<a href="/my-wallets/{wallet.id}">{wallet.name}</a>
			</li>
		{/each}
	</ul>
{/if}
