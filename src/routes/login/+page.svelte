<script lang="ts">
	import UiInput from "$lib/ui/UiInput.svelte";
	import UiButton from "$lib/ui/UiButton.svelte";
</script>

<form method="POST">
	<UiInput
		label="Usernname"
		name="username"
	/>
	<UiInput
		label="Password"
		name="password"
		type="password"
	/>

	<UiButton type="submit">Login!</UiButton>
</form>
