<script lang="ts">
	import { onMount } from 'svelte';
	import lottie from 'lottie-web';
	import { fly } from 'svelte/transition';
	import animationData from '$lib/animations/stars.json';

	let animationContainer: HTMLElement;

	onMount(() => {
		let starsAnimation = lottie.loadAnimation({
			container: animationContainer,
			animationData,
			loop: false,
			initialSegment: [100, 0],
			autoplay: false
		});

		let observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					starsAnimation.playSegments([100, 0], true);
				}
			},
			{ threshold: 1 }
		);
		observer.observe(animationContainer);
	});
	
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8 my-24 pt-24 lg:pt-0 relative ">
	<!--center animation   -->
		<div
			bind:this={animationContainer}
			class="lg:w-1/4 mx-auto w-3/4 mb-10 scale-[-1]
		absolute inset-x-0 -top-20 z-0"
		/>
	<div class="flow-root lg:mt-10">
		<div class="-mt-4 gap-8 flex flex-wrap justify-between lg:-ml-4">
			<div class="brand justify-end">
				<img
					class="h-12"
					src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
					alt="Tuple"
				/>
			</div>
			<div class="brand justify-start">
				<img
					class="h-12"
					src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg"
					alt="Mirage"
				/>
			</div>
			<div class="brand justify-end">
				<img
					class="h-12"
					src="https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg"
					alt="StaticKit"
				/>
			</div>
			<div class="brand justify-start">
				<img
					class="h-12"
					src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"
					alt="Transistor"
				/>
			</div>
			<div class=" hidden mt-4 ml-8 md:flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0">
				<img
					class="h-12"
					src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
					alt="Workcation"
				/>
			</div>
		</div>
	</div>
	<h2 class="mt-8 text-surface-500 text-center">Certified and trusted by Florida's bests.</h2>
</div>

<style>
	.brand {
		@apply mt-4 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0;
	}
</style>
