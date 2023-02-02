<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	// PROPS
	export let required = false;
	export let type = 'text';
	export let name: string;
	export let label: string | null;
	export let errorMessage: string | null = null;

	let localValue = '';
	const dispatch = createEventDispatcher();

	const dispatchInput = () => {
		dispatch('input', localValue);
	};
</script>

<div>
	<label for="iuInput">
		{#if !label}
			<slot name="label">Label text</slot>
		{:else}
			{label}
		{/if}
	</label>

	<input id="iuInput" {type} {name} on:input={dispatchInput} value={localValue} {required} />

	{#if errorMessage}<p>{errorMessage}</p>{/if}
</div>
