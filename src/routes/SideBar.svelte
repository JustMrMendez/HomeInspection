<script lang="ts">
	import { LightSwitch, Drawer, ProgressRadial, drawerStore } from '@skeletonlabs/skeleton';
	import { Layout } from '$lib/stores/LayoutStore';
	import { lang } from '$lib/stores/LayoutStore';
	import { enhance, type SubmitFunction } from '$app/forms';
	import BlogCard from './BlogCard.svelte';

	function classNames(...classes: any[]) {
		return classes.filter(Boolean).join(' ');
	}

	let loading: boolean = false;
	const changeLang: SubmitFunction = ({ data }) => {
		loading = true;
		data.append('lang', $lang);
		// append page title

		return async ({ update }) => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			loading = false;
			lang.update((store) => {
				store = store === 'en' ? 'es' : 'en';
				return store;
			});
			await update();
		};
	};
</script>

{#if $Layout.device === 'mobile'}
	<Drawer
		width="md:w-1/2 w-4/5"
		height="h-full"
		bgBackdrop="bg-surface-backdrop-token backdrop-blur-xs"
		position="right"
		duration={400}
		rounded="rounded-l-lg"
	>
		<div class="mt-7 ml-5">
			<LightSwitch />
		</div>
		<div class="mt-2 flex h-[90%] flex-col justify-between border-t-2 border-surface-500/50 px-2">
			<!-- menu -->
			<ul class="list-nav text-lg font-bold mt-4">
				<li><a on:click={() => ($drawerStore.open = false)} href="/">Home</a></li>
				<li><a on:click={() => ($drawerStore.open = false)} href="/Services">Services</a></li>
				<li><a on:click={() => ($drawerStore.open = false)} href="/About">About us</a></li>
				<!-- <li><a href="/blog">Blog</a></li> -->
			</ul>
			<BlogCard />
			<form
				method="post"
				use:enhance={changeLang}
				action="api/lang"
				class="grid w-full place-items-center"
			>
				<div class="text-xs opacity-40">Switch Language</div>
				<button
					disabled={loading}
					type="submit"
					class="btn-ringed-surface btn-base btn h-full w-full max-w-xs px-10 text-lg"
				>
					<span
						class={classNames(
							' block text-left transition-all duration-300',
							$lang === 'es' ? 'flex-grow' : 'flex-shrink'
						)}
						>EN
					</span>
					<span class="mb-1 h-1/2 w-1/6 flex-shrink rounded-full bg-surface-500" />
					<span
						class={classNames(
							' text-right transition-all duration-300',
							$lang === 'en' ? 'flex-grow' : 'flex-shrink'
						)}>ES</span
					>
					{#if loading}
						<div class="absolute">
							<ProgressRadial class="w-6" stroke={100} />
						</div>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class=" absolute h-5 opacity-70"
						>
							<path
								fill-rule="evenodd"
								d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
				</button>
			</form>
		</div>
	</Drawer>
{/if}
