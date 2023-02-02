<script lang="ts">
	export let type: 'submit' | 'reset' | 'button' | undefined | null = 'button';
	export let text: string | null = null;
</script>

<button {type}>
	{#if !!text}
		{text}
	{:else}
		<slot />
	{/if}
</button>
