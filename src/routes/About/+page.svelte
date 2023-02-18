<script lang="ts">
	import AboutUs from '$lib/AboutUs.svelte';
	import Herotest from '$lib/test/Herotest.svelte';
</script>

<svg
	class="absolute top-0 left-0 z-auto text-surface-500/30 -translate-y-8 -translate-x-1/2 transform hidden lg:block"
	width="60vw"
	height="96vh"
	fill="none"
	viewBox="0 0 640 784"
>
	<defs>
		<pattern
			id="svg-pattern-squares"
			x="118"
			y="0"
			width="20"
			height="20"
			patternUnits="userSpaceOnUse"
		>
			<rect x="0" y="0" width="4" height="4" class="hover:translate-x-8" fill="currentColor" />
		</pattern>
	</defs>
	<rect x="118" width="60vw" height="96vh" fill="url(#svg-pattern-squares)" />
</svg>
<Herotest />

<div class="relative bg-primary-400 pt-10 z-10">
	<AboutUs />
</div>
