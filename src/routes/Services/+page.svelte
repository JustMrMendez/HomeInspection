<script lang="ts">
	import BaseHero from '$lib/sections/BaseHero.svelte';
	import Services from '$lib/sections/Services.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<BaseHero />
<Services />
