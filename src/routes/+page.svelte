<script lang="ts">
	import Cta from '$lib/sections/CTA.svelte';
	import Services from '$lib/sections/Services.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Trust from '$lib/sections/Trust.svelte';
	import type { PageServerData } from './$types';
	import { lang, Layout } from '$lib/stores/LayoutStore';
	import type { PageContent } from '$lib/xata';
	import VideoPlayer from '$lib/modals/VideoPlayer.svelte';

	export let data: PageServerData;
	let PageContent: PageContent = {
		HeroTitle: "Expert home inspections you can trust",
		HeroSubtitle: "Expert, reliable home inspections. Roof certification and insurance protection included.",
		HeroSubtitle2: "Contact us for a free quote Today!",
		HeroCTA: "Call Now",
		PhoneNumber: "1-800-123-4567",
		id: "home",
	}
	// $: console.log($lang);
	
	// if ($lang === 'es') {
	// 	PageContent = data.content.PageContentES;
	// } else {
	// 	PageContent = data.content.PageContent;
	// }

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

{#key $lang}
	<Hero {PageContent} />
{/key}
<Services />
<Trust />
<Cta />
