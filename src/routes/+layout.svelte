<script lang="ts">
	import SideBar from './SideBar.svelte';
	import Footer from '../lib/sections/Footer.svelte';
	import { fly } from 'svelte/transition';
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
	import PageTransition from '$lib/animations/PageTransition.svelte';

	let main: HTMLElement | null;

	function scrollHandler(e: any): void {
		Layout.update((store) => {
			store.scrollPosition = e.target.scrollTop;
			return store;
		});
	}

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

	let maxScroll: number;
	$: console.log('maxScroll', $Layout.scrollPosition);

	onMount(() => {
		// get max scroll height of the page
		maxScroll = document.body.scrollHeight - window.innerHeight;
	});
	// scroll to top on page change
	$: page.subscribe(() => {
		main?.scrollTo(0, 0);
	});
</script>

<svelte:window bind:innerWidth={deviceWidth} />

<svelte:head>
	<title>Home</title>
</svelte:head>
<SideBar />
<!-- App Shell -->

<!-- simple arrow to scroll to the top when the user passes halve the scroll -->
{#if $Layout.scrollPosition > 2300 && $drawerStore.open === false}
	<button
		in:fly={{ x: 10 , duration: 300, easing: (t) => t * t * t * t}} out:fly={{ x: 10 , duration: 300, easing: (t) => t * t * t * t}}
		class="btn variant-ghost-primary fixed bottom-6 right-0 z-50 cursor-pointer rounded-l-full p-2"
		on:click={() => {
			main?.scrollTo(0, 0);
		}}
	>
		<svg
			class="text-on-surface-50/5 h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 10l7-7m0 0l7 7m-7-7v18"
			/>
		</svg>
	</button>
{/if}
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
			<nav class="hidden w-full lg:flex">
				<ul class="group list-nav mx-auto flex w-1/2 justify-around space-x-4 font-bold">
					<li>
						<a
							href="/"
							class="transition-all duration-300 hover:!opacity-100 group-hover:opacity-50">Home</a
						>
					</li>
					<li>
						<a
							href="/Services"
							class="transition-all duration-300 hover:!opacity-100 group-hover:opacity-50"
							>Services</a
						>
					</li>
					<li>
						<a
							href="/About"
							class="transition-all duration-300 hover:!opacity-100 group-hover:opacity-50"
							>About us</a
						>
					</li>
					<!-- <li><a href="/blog">Blog</a></li> -->
				</ul>
			</nav>
			<!-- </svelte:fragment> -->
			<svelte:fragment slot="trail">
				<div class="hidden lg:block">
					<LightSwitch />
				</div>

				<!-- call now primary button -->
				<a
					class="btn btn-sm variant-filled-primary hidden md:block"
					href="tel:3053302949"
					rel="noreferrer"
				>
					Contact us
				</a>
				<a
					class="btn btn-sm variant-filled-primary md:hidden"
					href="tel:+1-800-555-5555"
					rel="noreferrer"
				>
					Call Now
				</a>
				<div class="z-50 transition-transform duration-500 lg:hidden">
					<MenuIcon bind:open={$drawerStore.open} />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<PageTransition url={$page.url.toString()}>
		<slot />
	</PageTransition>

	<!-- <svelte:fragment slot="footer"> -->
	<Footer />
	<!-- </svelte:fragment> -->
</AppShell>
