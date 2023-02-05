<script lang="ts">
	import { Layout } from '$lib/stores/LayoutStore';
	

	//export let title: string="This is a test title";

	export let flip: boolean=true;
	type profile = {
		name: string;
		description: string;
		image: string;
	};

	export let profiles: profile[] = [
		{
			name: 'testName',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.	Cras aliquet purus dui laoreet diam sed lacus, fames.',
			image: 'tmp_headshot.png'
		},
		{
			name: 'testName',
			description:
				'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.	Cras aliquet purus dui laoreet diam sed lacus, fames.',
			image: 'tmp_headshot.png'
		}
	];
</script>

{#each profiles as profile, i}
	<div class="relative dark:bg-surface-500 bg-primary-400 py-16">
		<div class="absolute inset-x-0 top-0 hidden h-1/2 lg:block" aria-hidden="true" />
		<div class="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
			<div class="lg:grid lg:grid-cols-12">
				<div
					class="relative z-10 lg:col-span-4 {flip && i==1 ? "lg:col-start-10" : "lg:col-start-1"} lg:row-start-1 lg:bg-transparent lg:py-16 {flip && i==1 ? "ml-16" : ""}"
				>
					<div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true" />
					<div class="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
						<div class="relative h-60 md:aspect-square">
							<img
								class="absolute h-72 w-full z-10 bottom-0 object-cover rounded-b-full drop-shadow-2xl overflow-hidden"
								src={profile.image}
								alt=""
							/>
							<div
								class="z-0 rounded-full h-60 w-full bg-primary-500 shadow-2xl absolute inset-0"
							/>
						</div>
					</div>
				</div>
				<div
					class="relative bg-secondary-600 lg:col-span-10 {flip && i==1 ? "lg:col-start-1" : "lg:col-start-3"} lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl"
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
						<h2 class="text-3xl font-bold tracking-tight " id="join-heading">{profile.name}</h2>
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
