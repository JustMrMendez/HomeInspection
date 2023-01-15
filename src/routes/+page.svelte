<script lang="ts">
	import Cta from '$lib/sections/CTA.svelte';
	import Services from '$lib/sections/Services.svelte';
	import Hero from '$lib/sections/Hero.svelte';
	import Trust from '$lib/sections/Trust.svelte';
	import type { PageServerData } from './$types';
	import { page } from '$app/stores';

	export let data: PageServerData;

	let HeroContent: any;

	if ($page.url.searchParams.get('lang') === 'es') {
		HeroContent = data.content?.PageContentES;
		// check if PageContentES contains all fields on PageContent
		// if not, any null values will be replaced with the english version
		Object.keys(data.content?.PageContent).forEach((key) => {
			if (data.content?.PageContentES[key] === null) {
				HeroContent[key] = data.content?.PageContent[key];
			}
			// if the key is missing, add it
			if (data.content?.PageContentES[key] === undefined) {
				HeroContent[key] = data.content?.PageContent[key];
			}
		});

	} else {
		HeroContent = data.content?.PageContent;
	}
	
	data.content = data.content?.PageContentES;
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
<Hero {HeroContent}/>
<Services />
<Trust />
<Cta />
