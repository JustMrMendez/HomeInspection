<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { Layout } from '$lib/stores/LayoutStore';

	let FAQs = [
		{
			Answer:
				"A home inspection report will include a detailed assessment of the condition of the property, including any issues that were identified, such as structural problems, water damage, or pest infestations. It will also include the inspector's recommendations for repairs or upgrades.",
			Question: 'What is included in a home inspection report?',
			Link: null
		},
		{
			Answer:
				'The cost of a home inspection can vary depending on the size of the property and the specific services that are included. It is best to get a quote from the inspector before the inspection.',
			Question: 'What should I expect to pay for a home inspection?',
			Link: null
		},
		{
			Answer:
				'Yes, it is recommended that you be present during the inspection, as the inspector will be able to explain any issues or concerns that they find.',
			Question: 'Can I be present during the inspection?',
			Link: null
		}
	];
</script>

<section class="mx-auto my-32 mb-20 max-w-screen-xl scroll-m-36 sm:mt-24 lg:px-5">
	<div class="space-y-3 px-6 text-center md:mx-auto md:w-3/4">
		<h2 class="!text-3xl font-black md:!text-5xl">Frequently Asked Questions</h2>
		<p class="mx-auto pt-2 !text-sm opacity-70 md:!text-base">
			Our phone lines are open 24/7. If you have any questions, please feel free to call us, or use
			the live chat on the bottom {$Layout.device == 'mobile' ? 'left' : 'right'} of the screen.
		</p>
	</div>
	<div class="mt-10 flex h-fit flex-col items-center justify-between lg:flex-row">
		<div
			class="-mr-4 hidden w-full max-w-[40%] overflow-hidden bg-surface-800 shadow-md dark:bg-primary-800/40 md:rounded-token lg:block"
		>
			<img
				class="aspect-square object-cover mix-blend-screen shadow-2xl rounded-token "
				src="https://source.unsplash.com/random/?house"
				alt="House that can be inspected by a R & A Home Inspections"
			/>
		</div>
		<div class="relative w-full md:px-10 lg:px-0">
			<div
				id="blurbg"
				class="absolute inset-1/2 z-0 hidden h-2/3 w-2/3 rounded-full bg-primary-100/50 blur-3xl dark:bg-surface-500/50 md:block"
			/>
			<div
				class="relative z-10 min-h-full p-4 backdrop-blur-3xl rounded-token dark:bg-primary-500 dark:bg-opacity-50 dark:shadow-primary-500/25 md:bg-surface-100 md:shadow-2xl"
			>
				<Accordion
					autocollapse
					spacing="space-y-3"
					hover="dark:hover:bg-surface-500/50 hover:bg-primary-500/50 transition-all duration-200"
				>
					{#each Array.from(FAQs) as faq, i}
						<AccordionItem open={i == 0}>
							<svelte:fragment slot="summary">
								<h3 class="">{faq.Question}</h3>
							</svelte:fragment>
							<svelte:fragment slot="content">
								<p class="opacity-80">{faq.Answer}</p>
							</svelte:fragment>
						</AccordionItem>
					{/each}
				</Accordion>
				<div
					class="mt-10 flex flex-col items-center justify-between gap-10 py-5 shadow-inner md:flex-row md:px-5"
				>
					<h4 class="!text-2xl font-black">Have more questions?</h4>
					<a
						href="sms:1-305-330-2949?body=Hello%20R%20%26%20A%20Home%20Inspections!, I have a question about your services.
					"
					
						class="btn variant-ghost-primary"
					>
						Chat with us live
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
