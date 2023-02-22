<script lang="ts">
	import VodieoModal from './VodieoModal.svelte';

	import {
		modalStore,
		Modal,
		type ModalComponent,
		type ModalSettings
	} from '@skeletonlabs/skeleton';
	import VideoPlayer from '$lib/modals/VideoPlayer.svelte';
	import { Layout } from '$lib/stores/LayoutStore';

	type HeroContent = {
		title: string;
		subtitle: string;
		subtitle2: string;
		PhoneNumber: string;
		CTA: string;
	};

	export let hero: HeroContent = {
		title: 'Expert home inspections you can trust',
		subtitle:
			'Safeguarding Your Biggest Investment: Professional Home Inspections Tailored to You.',
		subtitle2: 'Contact us for an inspection Today!',
		PhoneNumber: '(305) 330-2949',
		CTA: 'Call Now!'
	};

	// $: console.log(PageContent);

	function triggerCustomModal(): void {
		const ModalComponent: ModalComponent = {
			ref: VideoPlayer,
			props: {
				src: 'https://www.youtube.com/embed/cgIL4Rp3Hks?controls=0',
				title: 'R & A Home Inspection Intro Video',
				allowfullscreen: true,
				loading: 'lazy'
			}
		};
		const d: ModalSettings = {
			type: 'component',
			component: ModalComponent
		};

		modalStore.trigger(d);
	}
</script>

<Modal width="md:w-2/3" padding="!overflow-visible" />
<section id="Home" class="mx-auto mt-10 mb-40 max-w-7xl scroll-m-36 px-6 sm:mt-24 lg:mt-32">
	<div class="lg:grid lg:grid-cols-12 lg:gap-8">
		<div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
			<h1 class=" text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
				{hero.title}
			</h1>
			<p class="mt-5 opacity-80">
				{hero.subtitle}
			</p>
			<div
				class="relative z-10 mt-8 w-full space-y-4 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left"
			>
				<p class="">
					{hero.subtitle2}
				</p>
				<a
					href="tel:3053302949"
					class="btn-base btn variant-filled-primary mt-3 w-full sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
				>
					<!-- separate HeroCta number from action -->
					<span class="mr-3">
						{hero.PhoneNumber}
					</span>
					<span>
						{hero.CTA}
					</span>
				</a>
			</div>
		</div>
		<div
			class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center"
		>
			<svg
				class="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
				width="640"
				height="784"
				fill="none"
				viewBox="0 0 640 784"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
						x="118"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="5"
							height="5"
							class="text-surface-500/50"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect x="118" width="404" height="525" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
			</svg>
			<VodieoModal />
		</div>
	</div>
</section>
