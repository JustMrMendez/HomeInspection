<script lang="ts">
	import AboutUs from '$lib/AboutUs.svelte';
	import BaseHero from '$lib/sections/BaseHero.svelte';
</script>

<BaseHero
	hero={{
		title: 'Learn more about us',
		titleAccent: 'and our team',
		subtitle: 'Your Trusted Home Inspection Team in Miami, Kendall, Doral, and Throughout Florida'
	}}
/>

<div class="relative z-10 bg-primary-400 pt-10 dark:bg-surface-500">
	<AboutUs />
</div>
