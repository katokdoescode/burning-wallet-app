<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	// PROPS
	export let required: boolean = false;
	export let type: string = 'text';
	export let name: string;
	export let label: string | null;
	export let errorMessage: string | null = null;

	let localValue: string = '';
	const dispatch = createEventDispatcher();

	const dispatchInput = () => {
		dispatch('input', localValue);
	}
</script>

<div>
	<label for="iuInput">
		{#if !label}
			<slot name="label">Label text</slot>
		{:else}
			{ label }
		{/if}
	</label>

	<input
		id="iuInput"
		type={type}
		name="{name}"
		on:input={dispatchInput}
		value={localValue}
		required={required}
	>

	{#if errorMessage}<p>{errorMessage}</p>{/if}
</div>
