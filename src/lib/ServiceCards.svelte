<script lang="ts">
	import { Layout } from '$lib/stores/LayoutStore';
	import { onMount } from 'svelte';
	export let serviceList = [
		{
			icon: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75',
			title: 'Insurance Inspection',
			description:
				"Get thorough insurance inspections from our experts. We'll assess your property for hazards, safety issues, and compliance with codes, and provide same-day reports for your peace of mind. Trust us to secure the best coverage for your property.",
			link: '/Services/4-point-inspection'
		},
		{
			icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
			title: 'Full Home Inspection',
			description:
				'Choose our expert team for a comprehensive home inspection. We`ll evaluate compliance with building codes, identify issues, and provide a detailed same-day report. Trust us for peace of mind in making decisions about your property.',
			link: '/services/wind-mitigation'
		},
		{
			icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
			title: 'Sewer Scope',
			description:
				"Let R & A inspect your sewer pipes with our state-of-the-art drain inspection camera. Our expert technicians will quickly identify any issues, providing you with detailed video footage and recommendations for repair. Trust us to keep your pipes running smoothly",
			link: '/services/roof-certification'
		}
	];

	let focusService: number | null;
	let observer: IntersectionObserver;

	onMount(() => {
		if ($Layout.device === 'desktop') {
			return;
		}
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						focusService = parseInt(entry.target.getAttribute('data-index') as string);
					} else {
						if (focusService !== null && focusService > 0) {
							focusService = focusService - 1;
						} else {
							focusService = null;
						}
					}
				});
			},
			{ threshold: 1 }
		);

		const cards = document.querySelectorAll('.card');
		cards.forEach((card) => observer.observe(card));
	});
</script>

<div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
	<!-- make them $Layout.scrollPosition with different speeds untill one is on top of the other one -->
	{#each serviceList as service, i}
		<div
			data-index={i}
			class:focused={i == focusService}
			class="group card sticky top-16 mx-auto
					flex max-w-2xl flex-col bg-surface-100 transition-all duration-500 rounded-token dark:bg-surface-800 lg:hover:-translate-y-2 lg:hover:!bg-opacity-70 lg:hover:shadow-md lg:hover:!backdrop-blur-sm"
		>
			<div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
				<header class="card-header">
					<div
						class:focused={i == focusService}
						class="absolute top-0 {i == 0
							? ''
							: i == 1
							? 'left-1/3 md:left-40 lg:left-12'
							: 'lg:left-12'} inline-block -translate-y-1/2 transform rounded-xl bg-secondary-500 p-5 shadow-lg transition-transform duration-500 lg:group-hover:-translate-y-1/3"
					>
						<svg
							class="h-6 w-6 text-success-500 group-hover:text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d={service.icon} />
						</svg>
					</div>
					<h3>{service.title}</h3>
				</header>
				<p class="mt-4">
					{service.description}
				</p>
			</div>
			<footer class="card-footer relative flex justify-between">
				<a href={service.link} class="text-base font-medium text-indigo-700 hover:text-indigo-600"
					>Read More <span aria-hidden="true"> &rarr;</span></a
				>
				<a
					href="tel:7868867436"
					class="absolute right-3 bottom-2 rounded-full  p-2 transition-all duration-500 hover:scale-105 dark:hover:fill-secondary-500 md:hover:bg-success-500  md:hover:!text-secondary-500 lg:rotate-[135deg] lg:group-hover:rotate-0
					{focusService == i
						? 'rotate-0 fill-secondary-500 text-secondary-500'
						: 'rotate-[135deg] fill-none dark:fill-primary-500'}"
					class:rotate-0={i == focusService}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6 "
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
						/>
					</svg>
				</a>
			</footer>
		</div>
	{/each}
</div>

<style>
	.card.focused {
		@apply scale-105 md:scale-[1.02] lg:scale-100;
	}
	.card.focused .card-header .absolute {
		@apply -translate-y-1/3;
	}
</style>
