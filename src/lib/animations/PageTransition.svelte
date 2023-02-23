<script lang="ts">
	import { fly } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div in:fly={{ x: 0, y: -50, duration: 500 }}>
		<slot />
	</div>
{/key}
