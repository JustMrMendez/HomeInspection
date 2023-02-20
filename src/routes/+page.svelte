<script lang="ts">
	import Faqs from './Faqs.svelte';

	import Cta from './Cta.svelte';
	import Testimonials from '$lib/sections/Testimonials.svelte';
	import Services from '$lib/sections/Services.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Trust from '$lib/sections/Trust.svelte';
</script>

<svg
	class="absolute top-0 right-0 z-auto hidden -translate-y-8 translate-x-8 transform text-surface-500/30 lg:block"
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

<Hero />
<Services />
<Trust />
<div class="w-full bg-secondary-600 py-1 text-success-50">
	<Testimonials />
</div>
<Cta />

<!-- FAQs -->
<Faqs />
