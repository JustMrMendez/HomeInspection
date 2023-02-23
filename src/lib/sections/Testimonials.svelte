<script lang="ts">
	import type { PageData } from '../../routes/$types';
	import Testimonial from '$lib/Testimonial.svelte';
	import { onMount } from 'svelte';

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

	// use observer to detect when a testimonial is in the center of the screen
	// and update the active button
	let active = 0;
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.id !== null) {
							active = parseInt(entry.target.id);
						}
					}
				});
			},
			{ threshold: 0.5 }
		);
		// select all buttons from the testimonials list
		const elements = document.querySelectorAll('ul button');
		elements.forEach((el) => {
			observer.observe(el);
		});
	});

	// a function to get a random translate amount for the testimonial cards
	function getTranslate() {
		return Math.floor(Math.random() * 20) - 10;
	}
</script>

<section class="mx-auto mt-10 mb-20 max-w-screen-xl scroll-m-36 sm:mt-24 lg:mt-32 ">
	<div class=" space-y-3 px-6 text-center md:mx-auto md:w-3/4">
		<h2 class="!text-3xl font-black md:!text-5xl">What our clients say</h2>
		<p class="mx-auto pt-2 !text-sm opacity-70 md:!text-base">
			We are proud of our reputation and the quality of our work. Here's what our clients have to
			say about us.
		</p>
	</div>
	<div class="relative w-full py-2">
		<ul
			class="mt-10 flex min-h-fit -translate-x-2 snap-x snap-mandatory justify-between gap-5 overflow-x-auto overflow-y-visible px-10 py-20 shadow-inner md:flex-wrap md:shadow-none lg:flex-nowrap lg:overflow-visible "
		>
			{#each testimonials as testimonial, i}
				<button
					name="{testimonial.name} testimonial card from {testimonial.city} "
					id={i.toString()}
					on:click={() => {
						active = i;
						const element = document.getElementById(i.toString());
						if (element) {
							element.scrollIntoView({
								behavior: 'smooth',
								block: 'center'
							});
						}
					}}
					class="min-w-full flex-grow snap-center transition-all duration-500 md:w-2/5 md:min-w-min md:cursor-default md:hover:z-10
					{active === i ? 'shadow-lg' : ''}"
					style={`transform: translateX(calc(${getTranslate()}px*${
						i + Math.random() * 1
					})) rotate(calc(${i % 2 !== 0 ? '-1' : '1'}*${i - Math.random() * 15}deg));`}
				>
					<Testimonial {testimonial} />
				</button>
			{/each}
		</ul>
	</div>

	<div class="flex justify-center gap-3 md:hidden">
		{#each testimonials as _, i}
			<button
				on:click={() => {
					active = i;
					const element = document.getElementById(i.toString());
					if (element) {
						element.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
							inline: 'end'
						});
					}
				}}
				class="h-3 rounded-full transition-all duration-300 md:hover:bg-secondary-400
			{active === i ? ' z-0 w-10 bg-secondary-800' : 'z-10 w-3 bg-secondary-200'}
			"
			/>
		{/each}
	</div>
</section>

<style>
	/* remove ul scrollbar */
	ul::-webkit-scrollbar {
		display: none;
	}
</style>
