<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { wallet, transactions } = data;

	const getCreationDate = () => {
		let creationDate = '';

		if (wallet?.created) {
			creationDate = new Date(wallet.created).toDateString();
		}

		return creationDate;
	};
</script>

<section>
	<h1>Wallet <span>{wallet?.name}</span></h1>
	<a href="/my-wallets">Back to walltes</a>

	<ul>
		<li>Wallet currency: {wallet?.expand?.currency.name}</li>
		<li>Wallet amount: <i>in progress...</i></li>
		<li>Wallet created at: {getCreationDate()}</li>
	</ul>

	<section>
		<h2>Transactions</h2>
		{#if transactions.length}
			<ul>
				{#each transactions as transaction}
					<li>
						<a href="/transactions/{transaction.id}">
							{transaction?.expand.category.name}
							{transaction?.amount}
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p>You have no transactions</p>
		{/if}
	</section>
</section>
