<script lang="ts">
	import { modalStore, type ModalComponent, type ModalSettings } from '@skeletonlabs/skeleton';
	import VideoPlayer from '$lib/modals/VideoPlayer.svelte';
	import { Layout } from '$lib/stores/LayoutStore';

	function modalComponentEmbed(): void {
		const d: ModalSettings = {
			type: 'component',
			component: {
				ref: VideoPlayer,
				props: {
					src: 'https://www.youtube.com/embed/cgIL4Rp3Hks?controls=0',
					title: 'R & A Home Inspection Intro Video',
					allowfullscreen: true,
					loading: 'lazy'
				}
			}
		};
		modalStore.trigger(d);
	}
</script>

<div style="transform: translateY({$Layout.scrollPosition / 2.8}px)">
	<div
		class="group relative mx-auto w-full overflow-hidden rounded-lg duration-200 hover:scale-[1.03] md:transition-all lg:max-w-md"
	>
		<button
			name="Watch our video to learn more"
			on:click={modalComponentEmbed}
			type="button"
			class="relative z-20 block w-full overflow-hidden rounded-lg border-2 border-primary-500 bg-primary-500/5 transition-all duration-500 hover:bg-transparent focus:outline-none group-hover:border-tertiary-500 dark:bg-surface-500/25 dark:hover:bg-transparent"
		>
			<span class="sr-only">Watch our video to learn more</span>
			<span
				class="absolute inset-0 z-20 flex h-full w-full items-center justify-center"
				aria-hidden="true"
			>
				<!-- make the svg scroll up faster using the yScroll value -->
				<svg
					class="h-20 w-20 transition-all duration-500 group-hover:scale-110"
					viewBox="0 0 84 84"
				>
					<circle
						class="text-secondary-500/50 backdrop-blur-md transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-[0.8] group-hover:text-success-500/50"
						opacity="0.9"
						cx="42"
						cy="42"
						r="42"
						fill="currentColor"
					/>
					<path
						class="text-success-500 transition-all duration-500 group-hover:scale-110 group-hover:text-secondary-500 "
						fill="currentColor"
						d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
					/>
				</svg>
			</span>
			<img
				class="aspect-video w-full mix-blend-multiply"
				src="thumbnail.jpeg"
				alt="video thumbnail"
			/>
		</button>
	</div>
</div>
