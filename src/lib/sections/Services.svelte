<script lang="ts">
	import { Layout } from '$lib/stores/LayoutStore';
	import { onMount } from 'svelte';
	const serviceList = [
		{
			icon: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15',
			title: '4-Point Inspection',
			description:
				"Our 4-point inspection service is a comprehensive inspection of your home's electrical, plumbing, HVAC, and roof. We provide a detailed report that will help you save money on your insurance premiums.",
			link: '/services/4-point-inspection'
		},
		{
			icon: 'M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z',
			title: 'Wind Mitigation',
			description:
				'Wind mitigation is a process that helps you save money on your insurance premiums. Our team of experts will inspect your home and provide you with a detailed report that will help you save money on your insurance premiums.',
			link: '/services/wind-mitigation'
		},
		{
			icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
			title: 'Roof Certification',
			description:
				"Choose our roof certification service for a thorough evaluation by experienced professionals using modern equipment. We provide an estimate of your roof's remaining lifespan and identify any potential issues. Our comprehensive certification meets all of your needs.",
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
						if (focusService > 0) {
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
<div
	class="border-t-[40px] md:border-none dark:border-surface-900 border-primary-900/70 rounded-t-lg"
>
	<div id="Services" class="bg-surface-500/0 pb-32 sticky -top-1 lg:relative">
		<div class="absolute inset-0">
			<img
				class="h-full w-full object-cover"
				src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
				alt=""
			/>
			<div class="absolute inset-0 dark:bg-surface-900 bg-primary-500 mix-blend-multiply" />
		</div>
		<div class="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
			<h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Services</h1>
			<p class="mt-6 max-w-3xl text-bold text-white/80 unstyled">
				Best in class home inspection in Florida! We offer top-quality services at the best prices.
				With modern equipment to handle a wide range of services, and ensure precision.

				<span class="block mt-3"
					>Our services include: Mold Testing, Wind Mitigation Inspections, 4-Point Inspections,
					Roof Certifications, and more!</span
				>
			</p>
		</div>
	</div>

	<!-- Overlapping cards -->
	<section
		class="sticky top-0 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8 z-20"
		aria-labelledby="contact-heading"
	>
		<h2 class="sr-only" id="contact-heading">Contact us</h2>
		<div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
			<!-- make them $Layout.scrollPosition with different speeds untill one is on top of the other one -->
			{#each serviceList as service, i}
				<div
					data-index={i}
					class:focused={i == focusService}
					class="card group flex flex-col lg:hover:-translate-y-2
					sticky top-16 lg:hover:bg-opacity-70 lg:hover:shadow-md lg:hover:backdrop-blur-sm transition-all duration-500"
				>
					<div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
						<header class="card-header">
							<div
								class:focused={i == focusService}
								class="absolute top-0 {i == 0
									? ''
									: i == 1
									? 'left-1/3 md:left-40 lg:left-12'
									: 'right-1/4 '} lg:group-hover:-translate-y-1/3 inline-block -translate-y-1/2 transform rounded-xl bg-secondary-500 p-5 shadow-lg transition-transform duration-500"
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
					<footer class="card-footer flex justify-between relative">
						<a
							href={service.link}
							class="text-base font-medium text-indigo-700 hover:text-indigo-600"
							>Read More <span aria-hidden="true"> &rarr;</span></a
						>
						<a
							href="tel:7868867436"
							class="rounded-full hover:bg-success-500 hover:!text-secondary-500 transition-all duration-500 hover:scale-105 absolute right-3 bottom-2 fill-none dark:fill-primary-500 dark:hover:fill-secondary-500 p-2 lg:group-hover:rotate-0 rotate-[135deg]"
							class:rotate-0={i == focusService}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 "
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
	</section>
</div>

<style>
	.card.focused {
		@apply scale-105 lg:scale-100;
	}
	.card.focused .card-header .absolute {
		@apply -translate-y-1/3;
	}
</style>
