<script lang="ts">
	import ServiceCards from '../ServiceCards.svelte';

	import { Layout } from '$lib/stores/LayoutStore';
	import { onMount } from 'svelte';

	let focusService: number | null;
	let observer: IntersectionObserver;

	onMount(() => {
		if ($Layout.device === 'desktop') {
			return;
		}
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						focusService = parseInt(entry.target.getAttribute('data-index') as string);
					} else {
						if (focusService !== null && focusService > 0) {
							focusService = focusService - 1;
						} else {
							focusService = null;
						}
					}
				});
			},
			{ threshold: 1 }
		);

		const cards = document.querySelectorAll('.card');
		cards.forEach((card) => observer.observe(card));
	});
</script>

<div
	class="rounded-t-lg border-t-[40px] border-primary-900/70 dark:border-surface-900 md:border-none"
>
	<div id="Services" class="sticky -top-1 bg-surface-500/0 pb-32 lg:relative">
		<div class="absolute inset-0">
			<img
				class="h-full w-full object-cover"
				src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
				alt="3 people reading a report from R & R Home Inspections."
			/>
			<div class="absolute inset-0 bg-primary-500 mix-blend-multiply dark:bg-surface-900" />
		</div>
		<div class="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
			<h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Services</h1>
			<p class="text-bold unstyled mt-6 max-w-3xl text-white/80">
				Best in class home inspection in Florida! We offer top-quality services at the best prices.
				With modern equipment to handle a wide range of services, and ensure precision.

				<span class="mt-3 block"
					>Our services include: Mold Testing, Wind Mitigation Inspections, 4-Point Inspections,
					Roof Certifications, and more!</span
				>
			</p>
		</div>
	</div>

	<!-- Overlapping cards -->
	<section
		class="sticky top-0 z-20 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8"
		aria-labelledby="contact-heading"
	>
		<h2 class="sr-only" id="contact-heading">Contact us</h2>
		<ServiceCards />
	</section>
</div>

<style>
	.card.focused {
		@apply scale-105 md:scale-[1.02] lg:scale-100;
	}
	.card.focused .card-header .absolute {
		@apply -translate-y-1/3;
	}
</style>
