<script lang="ts">
	import UiInput from '$lib/ui/UiInput.svelte';
	import UiButton from '$lib/ui/UiButton.svelte';
</script>

<svelte:head>
	<title>🔥BWallet | Register</title>
</svelte:head>

<form method="POST" action="?/register">
	<UiInput name="name" label="Full Name" />
	<UiInput name="email" label="Email" type="email" required />
	<UiInput name="username" label="Username" required />
	<UiInput name="password" label="Password" type="password" />

	<UiButton type="submit">Submit!</UiButton>
</form>
