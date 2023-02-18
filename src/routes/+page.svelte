<script lang="ts">
	import Cta from '$lib/sections/CTA.svelte';
	import Services from '$lib/sections/Services.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Trust from '$lib/sections/Trust.svelte';
	import type { PageData } from './$types';
	import Testimonial from '$lib/Testimonial.svelte';

	export let data: PageData;

	let testimonials = [
		{
			name: 'John',
			city: 'Kendall',
			date: 'January 2022',
			text: 'Professional, knowledgeable, and thorough. John uncovered several issues that I would have never known about otherwise, which saved me time, money, and hassle. Highly recommended!'
		},
		{
			name: 'Sarah',
			city: 'Doral',
			date: 'November 2022',
			text: "Always on time, friendly, and willing to answer questions. Sarah did an amazing job. Very thorough and provided a comprehensive report that included photos and recommendations for repairs. They've helped me avoid potential disasters. I couldn't be happier!"
		},
		{
			name: 'Tom',
			city: 'Miami',
			date: 'February 2023',
			text: 'Professional, thorough, and knowledgeable. Tom provided a detailed report that helped me address some issues before listing my home. Stress-free and reasonable prices. I would definitely use them again and recommend them to others.'
		}
	];
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
<Cta />
<section id="Home" class="relative mx-auto mt-10 mb-40 max-w-7xl scroll-m-36 px-6 sm:mt-24 lg:mt-32">
	<div class="text-center">
		<h2>What our clients say</h2>
		<p>
			We are proud of our reputation and the quality of our work. Here's what our clients have to
			say about us.
		</p>
	</div>
	<div class="relative mt-10 w-full py-2">
		<ul class="flex min-h-fit snap-x snap-mandatory gap-5 overflow-y-clip overflow-x-scroll">
			{#each testimonials as testimonial}
				<li class="min-w-full flex-grow snap-center md:w-2/5 md:min-w-min">
					<Testimonial {testimonial} />
				</li>
			{/each}
		</ul>
		<!-- simple arrow pointing right on the bottom right of the element -->
	</div>
	<!-- <div class="absolute -bottom-5 right-0 z-10 h-32 text-surface-300 opacity-60">
		<svg
			class="h-full w-full"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
			fill="none"
			color="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M5 12h14" />
			<path d="M12 5l7 7-7 7" />
		</svg>
	</div> -->
	<!-- 3 divs to hint the stepper -->
	<div class="flex gap-2 justify-center">
		<div class="rounded-full h-2 w-10 bg-secondary-400"></div>
		<div class="rounded-full h-2 w-2 bg-surface-300"></div>
		<div class="rounded-full h-2 w-2 bg-surface-300"></div>
	</div>
</section>

<style>
	/* remove ul scrollbar */
	ul::-webkit-scrollbar {
		display: none;
	}
</style>
