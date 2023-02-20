<script lang="ts">
	import { Layout } from '$lib/stores/LayoutStore';

	//export let title: string="This is a test title";

	export let flip: boolean = true;
	type profile = {
		name: string;
		title?: string;
		email?: string;
		description: string;
		image: string;
	};

	export let profiles: profile[] = [
		{
			name: 'Cristofer Roque',
			title: 'Co-Founder',
			email: 'mrroque@rnainspection.com',
			description:
				"Thank you for considering our home inspection services in Florida. We use the latest equipment available in the market to provide you with accurate and professional reports. Whether you're buying, selling, or assessing the condition of your home, we're here to help. Our goal is to provide high-quality assessments that help you make informed decisions about your property. With our focus on customer satisfaction, we aim to be your go-to choice for house inspections in Florida.",
			image: 'cris.png'
		},
		{
			name: 'Carlos Azcuy',
			title: 'Co-Founder',
			email: 'mrazcuy@rnainspection.com',
			description:
				"Welcome to our home inspection services in Florida. We provide top-notch service to help you make informed decisions about your property. When you choose us, you're partnering with a certified business that is committed to being your trusted home inspector. We're dedicated to ensuring your peace of mind with accurate and reliable home inspections. With our InterNACHI certification, we have the knowledge and expertise to help you with your home inspection needs.",
			image: 'carlos1.png'
		}
	];
</script>

{#each profiles as profile, i}
	<div class="relative bg-primary-400 py-16 text-surface-50 dark:bg-surface-500">
		<div class="mx-auto max-w-7xl bg-transparent lg:px-8">
			<div class="flex flex-col lg:grid lg:grid-cols-12">
				<div
					class="relative z-10 lg:col-span-4 {flip && i == 1
						? 'lg:col-start-10'
						: 'lg:col-start-1'} lg:row-start-1 lg:bg-transparent lg:py-16 {flip && i == 1
						? 'lg:ml-16'
						: ''}"
				>
					<div class="absolute inset-x-0 h-1/2 lg:hidden" aria-hidden="true" />
					<div
						class="mx-auto max-w-md px-6 sm:max-w-3xl md:flex md:justify-center lg:max-w-none lg:p-0"
					>
						<div class="relative flex h-56 justify-center md:aspect-square">
							<img
								class="absolute bottom-0 z-10 h-72 overflow-hidden rounded-b-full object-cover drop-shadow-2xl"
								src={profile.image}
								alt=""
							/>
							<div
								class="absolute z-0 mx-auto aspect-square h-full rounded-full bg-surface-800 shadow-2xl dark:bg-primary-500 md:aspect-square lg:inset-0 lg:h-auto lg:w-full"
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
						<span class="italic no-underline">
							{profile.title} -
							<a class="unstyled hover:underline" href="mailto:{profile.email}"
								><small>{profile.email}</small></a
							>
						</span>
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
