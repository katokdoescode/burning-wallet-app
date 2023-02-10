<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const transaction = data;

	// TODO: Create method to handle icons paths
	/**
	 * <img
	 * 	src="http://127.0.0.1:8090/api/files/{transaction.expand?.category.expand.icon.collectionId}/{transaction.expand?.category.expand.icon.id}/{transaction.expand?.category.expand.icon.icon}"
	 * 	alt="Category icon {transaction.expand?.category.name}"
	 * >
	 */

	const getCreationDate = () => {
		let creationDate = '';

		if (transaction.created) {
			creationDate = new Date(transaction.created).toLocaleString();
		}

		return creationDate;
	};
</script>

<section>
	<h1>Transaction</h1>
	<a href="/my-wallets/{transaction.wallet}">Back to {transaction.expand?.wallet.name} wallet</a>
	<ul>
		<li>Amount: {transaction.amount} {transaction.expand?.wallet?.expand?.currency?.name}</li>
		<li>Category: {transaction.expand?.category.name}</li>
		<li>Created: {getCreationDate()}</li>
		<li>Wallet: {transaction.expand?.wallet.name}</li>
	</ul>
</section>
