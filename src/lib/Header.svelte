<header class="main-header">
	<nav>
		<ul>
			<li><a href="/">Wallet.svelte</a></li>
			<li><a href="/login">Login</a></li>
			<li><a href="/logout">logout</a></li>
			<li><a href="/register">Sign up</a></li>
			<li><a href="/my-wallets">Wallets</a></li>
		</ul>
	</nav>
</header>

<style lang="scss">
	.main-header {
		padding: 0 10px;

		ul {
			display: flex;
			justify-content: flex-start;
			column-gap: 10px;
			padding: 0;

			li {
				list-style: none;
			}
		}
	}
</style>
