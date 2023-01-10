<script lang="ts">
	import Cta from '$lib/sections/CTA.svelte';
import Header from '$lib/sections/Header.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Trust from '$lib/sections/Trust.svelte';
	import { onDestroy, onMount } from 'svelte';

	let main: HTMLElement | null;
	let yScroll: number;

	function scrollHandler(e: any): void {
		yScroll = e.target.scrollTop;
		console.log(yScroll);
	}	
	
	onMount(() => {
		main = document.getElementById('page');
		main?.addEventListener('scroll', scrollHandler);
	});

	onDestroy(() => {
		main?.removeEventListener('scroll', scrollHandler);
	});
</script>
<svg
	class="absolute top-0 right-0 z-auto text-surface-500/30 -translate-y-8 translate-x-8 transform hidden lg:block"
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
<Hero scroll={yScroll}/>
<Header scroll={yScroll} />
<Trust />
<Cta />