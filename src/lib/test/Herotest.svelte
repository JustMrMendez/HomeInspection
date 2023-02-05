<script lang="ts">
	import { Layout } from "$lib/stores/LayoutStore";



</script>

<section id="Home" class="mx-auto mt-10 max-w-7xl px-6 sm:mt-24 lg:mt-32 mb-40 scroll-m-36">
	<div class="lg:grid lg:grid-cols-12 lg:gap-8">
		<div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
			<h1 class=" text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
				HeroTitle
			</h1>
			<p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
				HeroSubtitle
			</p>
			<div
				class="mt-8 relative z-10 sm:mx-auto sm:max-w-lg sm:text-center w-full lg:mx-0 lg:text-left space-y-4"
			>
				<p class="text-base font-medium text-gray-900">
					HeroSubtitle2
				</p>
					<a
						href="tel:7868867436"
						class="btn mt-3 btn-filled-primary btn-base w-full sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
					>
						<!-- separate HeroCta number from action -->
						<span class="mr-3">
							PhoneNumber
						</span>
						<span>
							HeroCTA
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
			<div style="transform: translateY({$Layout.scrollPosition / 2.8}px)">
				<div
					class="relative mx-auto w-full rounded-lg lg:max-w-md hover:scale-[1.03] group overflow-hidden md:transition-all md:duration-200"
				>
					<button
						type="button"
						class="relative z-20 block w-full border-2 border-primary-500 group-hover:border-tertiary-500 transition-all duration-200 overflow-hidden rounded-lg bg-transparent focus:outline-none"
					>
						<span class="sr-only">Watch our video to learn more</span>
						<span
							class="absolute inset-0 z-20 flex h-full w-full items-center justify-center"
							aria-hidden="true"
						>
							<!-- make the svg scroll up faster using the yScroll value -->
							<svg
								class="h-20 w-20 group-hover:scale-110 transition-all duration-500"
								viewBox="0 0 84 84"
							>
								<circle
									class="text-secondary-500/50 group-hover:scale-[0.8] group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500 group-hover:text-success-500/50"
									opacity="0.9"
									cx="42"
									cy="42"
									r="42"
									fill="currentColor"
								/>
								<path
									class="text-success-500 group-hover:scale-110 transition-all duration-500 group-hover:text-secondary-500 "
									fill="currentColor"
									d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
								/>
							</svg>
						</span>
						<div
							class="w-full h-full z-10 absolute bg-surface-500/50 transform grid grid-cols-6 grid-rows-6 gap-2 overflow-hidden place-items-center"
						>
							<!--  build a grid of 36 shapes using {#each} that have random order, use diferent shapes -->
							{#each Array(36).fill(0) as _, i}
								<div
									class="w-4 h-4 bg-surface-300/5 rounded-full group-hover:animate-pulse transition-all duration-1000"
								/>
							{/each}
						</div>
						<img class="w-full aspect-video" src="https://picsum.photos/640/360?random=1" alt="" />
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
