<script lang="ts">
	import { Layout } from '$lib/stores/LayoutStore';

	//export let title: string="This is a test title";

	export let flip: boolean = true;
	type profile = {
		name: string;
		title?: string;
		description: string;
		image: string;
	};

	export let profiles: profile[] = [
		{
			name: 'Cristofer Roque',
			title: 'Co-Founder',
			description:
				'As co-founder of R&A Home Inspection, my goal is to ensure that we provide the most acurate and professional reports to our clients, using the latest equipment in the market we ensure the top quality on our assessments. We are here to help you buy, sell or check the condition of your home.',
			image: 'cris.png'
		},
		{
			name: 'Carlos Azcuy',
			title: 'Co-Founder',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.	Cras aliquet purus dui laoreet diam sed lacus, fames.',
			image: 'carlos1.png'
		}
	];
</script>

{#each profiles as profile, i}
	<div class="relative bg-primary-400 py-16 dark:bg-surface-500">
		<div class="mx-auto max-w-7xl bg-transparent lg:px-8">
			<div class="flex flex-col lg:grid lg:grid-cols-12">
				<div
					class="relative z-10 flex-1 lg:col-span-4 {flip && i == 1
						? 'lg:col-start-10'
						: 'lg:col-start-1'} lg:row-start-1 lg:bg-transparent lg:py-16 
					                                   		  {flip && i == 1 ? '' : ''}"
				>
					<div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true" />
					<div
						class="mx-auto grid max-w-md place-items-center px-6 sm:max-w-3xl lg:max-w-none lg:p-0"
					>
						<div class="relative h-56 md:aspect-square">
							<img
								class="absolute bottom-0 z-10 h-72 overflow-hidden rounded-b-full object-cover drop-shadow-2xl"
								src={profile.image}
								alt=""
							/>
							<div
								class="absolute z-0 mx-auto aspect-square h-full rounded-full bg-surface-800 shadow-2xl dark:bg-primary-500 lg:inset-0 lg:h-56 lg:w-full"
							/>
						</div>
					</div>
				</div>
				<div
					class="relative bg-secondary-600 lg:col-span-10 {flip && i == 1
						? 'lg:col-start-1'
						: 'lg:col-start-3'} lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl"
				>
					<div
						class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
						aria-hidden="true"
					>
						<svg
							class="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
							width="404"
							height="384"
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
							><defs
								><pattern
									id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
									><rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-surface-500/50"
										fill="currentColor"
									/></pattern
								></defs
							><rect
								x="100"
								width="204"
								height="384"
								fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
							/></svg
						>
						<svg
							class="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
							width="404"
							height="384"
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
							><defs
								><pattern
									id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
									x="0"
									y="0"
									width="20"
									height="20"
									patternUnits="userSpaceOnUse"
									><rect
										x="0"
										y="0"
										width="4"
										height="4"
										class="text-surface-500/50"
										fill="currentColor"
									/></pattern
								></defs
							><rect
								width="304"
								height="384"
								fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
							/></svg
						>
					</div>
					<div
						class="relative mx-auto max-w-md space-y-6 py-12 px-6 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-3 lg:max-w-none lg:p-0"
					>
						<h2 class="text-3xl font-bold tracking-tight underline line-clamp-3" id="join-heading">
							{profile.name}
						</h2>
						<span class="italic no-underline">{profile.title}</span>
						<p class="text-lg ">{profile.description}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
{/each}

<style>
	img {
		-webkit-filter: drop-shadow(25px 0px 35px #000);
		filter: drop-shadow(25px 0px 15px rgb(0, 0, 0, 0.5));
	}
</style>
