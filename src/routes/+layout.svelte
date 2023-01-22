<script lang="ts">
  import Footer from './Footer.svelte';

	// import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		LightSwitch,
		Drawer,
		drawerStore,
		SlideToggle,
		ProgressRadial
	} from '@skeletonlabs/skeleton';
	import MenuIcon from './MenuIcon.svelte';
	import Logo from '$lib/Logo.svelte';
	import LogoFull from '$lib/LogoFull.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { Layout } from '$lib/stores/LayoutStore';
	import { page } from '$app/stores';
	import { lang } from '$lib/stores/LayoutStore';
	import { enhance, type SubmitFunction } from '$app/forms';
	import BlogCard from './BlogCard.svelte';

	let main: HTMLElement | null;

	function scrollHandler(e: any): void {
		Layout.update((store) => {
			store.scrollPosition = e.target.scrollTop;
			return store;
		});
	}

	lang.update((store) => {
		if ($page.url.searchParams.get('lang')) {
			store = $page.url.searchParams.get('lang') as 'en' | 'es';
		}
		return store;
	});

	onMount(() => {
		main = document.getElementById('page');
		main?.addEventListener('scroll', scrollHandler);
		document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
	});

	onDestroy(() => {
		main?.removeEventListener('scroll', scrollHandler);
	});

	let deviceWidth: number;
	$: $Layout.device = deviceWidth > 1024 ? 'desktop' : 'mobile';

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

<svelte:head>
	<title>Home</title>
</svelte:head>
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
		<div class="flex-col flex border-t-2 h-[90%] border-surface-500/50 mt-2 justify-between px-2">
			<!-- menu -->
			<ul class="list-nav text-lg font-bold">
				<li><a href="/">Home</a></li>
				<li><a href="/Services">Services</a></li>
				<li><a href="/About">About us</a></li>
				<li><a href="/blog">Blog</a></li>
			</ul>
			<BlogCard />
			<form
				method="post"
				use:enhance={changeLang}
				action="api/lang"
				class="w-full grid place-items-center"
			>
				<div class="text-xs opacity-40">Switch Language</div>
				<button
					disabled={loading}
					type="submit"
					class="btn btn-ringed-surface btn-base w-full h-full px-10 max-w-xs text-lg"
				>
					<span
						class={classNames(
							' transition-all duration-300 text-left block',
							$lang === 'es' ? 'flex-grow' : 'flex-shrink'
						)}
						>EN
					</span>
					<span class="flex-shrink w-1/6 rounded-full h-1/2 bg-surface-500 mb-1" />
					<span
						class={classNames(
							' transition-all duration-300 text-right',
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
							class=" h-5 absolute opacity-70"
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
<!-- App Shell -->
<AppShell slotHeader="" slotPageContent="relative bg-surface-50/5 z-10">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar
			class="lg:px-20 xl:px-40 {$Layout.scrollDirection === 'down'
				? 'py-2'
				: ''} transition-all duration-300"
		>
			<svelte:fragment slot="lead">
				<LogoFull
					styles="hidden md:block h-10 transition-all duration-300 {$Layout.scrollDirection ===
					'down'
						? 'scale-90'
						: ''}"
				/>
				<Logo
					styles="w-12 md:hidden transition-all duration-300 {$Layout.scrollDirection === 'down'
						? 'scale-90'
						: ''}"
				/>
			</svelte:fragment>
			<!-- <svelte:fragment slot=""> -->
			<!-- Nav -->
			<nav class="lg:flex w-full hidden">
				<ul class="flex justify-around space-x-4 w-1/2 mx-auto">
					<li><a href="/">Home</a></li>
					<li><a href="/Services">Services</a></li>
					<li><a href="/About">About us</a></li>
					<li><a href="/blog">Blog</a></li>
				</ul>
			</nav>
			<!-- </svelte:fragment> -->
			<svelte:fragment slot="trail">
				<div class="hidden lg:block">
					<LightSwitch />
				</div>

				<!-- call now primary button -->
				<a
					class="hidden md:block btn btn-sm btn-filled-primary"
					href="tel:+1-800-555-5555"
					rel="noreferrer"
				>
					Contact us
				</a>
				<a
					class="btn btn-sm btn-filled-primary md:hidden"
					href="tel:+1-800-555-5555"
					rel="noreferrer"
				>
					Call Now
				</a>
				<div class="lg:hidden transition-transform duration-500 z-50">
					<MenuIcon bind:open={$drawerStore.open} />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->

	<slot />
	<!-- <svelte:fragment slot="footer"> -->
	<Footer />
	<!-- </svelte:fragment> -->
</AppShell>
