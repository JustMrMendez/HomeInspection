<script lang="ts">
	import { page } from '$app/stores';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="relative overflow-hidden">
	<div class="absolute inset-y-0 h-full w-full" aria-hidden="true">
		<div class="relative h-full">
			<svg
				class="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 lg:translate-x-full"
				width="404"
				height="784"
				fill="none"
				viewBox="0 0 404 784"
			>
				<defs>
					<pattern
						id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-surface-500/50"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect width="404" height="784" fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
			</svg>
			<svg
				class="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2  lg:-translate-x-3/4"
				width="404"
				height="784"
				fill="none"
				viewBox="0 0 404 784"
			>
				<defs>
					<pattern
						id="d2a68204-c383-44b1-b99f-42ccff4e5365"
						x="0"
						y="0"
						width="20"
						height="20"
						patternUnits="userSpaceOnUse"
					>
						<rect
							x="0"
							y="0"
							width="4"
							height="4"
							class="text-surface-500/50"
							fill="currentColor"
						/>
					</pattern>
				</defs>
				<rect width="404" height="784" fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
			</svg>
		</div>
	</div>

	<div class="relative pt-6 pb-16 sm:pb-24">
		<div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-24">
			<div class="text-center">
				<h1 class="text-gray-surface-500/50:text-5xl text-4xl font-bold tracking-tight md:text-6xl">
					<span class="block">{data.service.title}</span>
					<span class="block text-primary-600">{data.service.title2}</span>
				</h1>
				<p
					class="text-gray-surface-500/50:text-lg mx-auto mt-3 max-w-md text-base md:mt-5 md:max-w-3xl md:text-xl"
				>
					{data.service.description}
				</p>
			</div>
		</div>
	</div>

	<div class="relative">
		<div class="absolute inset-0 flex flex-col" aria-hidden="true">
			<div class="flex-1" />
			<div class="w-full flex-1 bg-gray-800" />
		</div>
	</div>
</div>
