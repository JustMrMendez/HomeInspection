<script lang="ts">
  import SideBar from './SideBar.svelte';

  import Footer from '../lib/sections/Footer.svelte';

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

	let main: HTMLElement | null;

	function scrollHandler(e: any): void {
		Layout.update((store) => {
			store.scrollPosition = e.target.scrollTop;
			return store;
		});
	};

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

</script>

<svelte:window bind:innerWidth={deviceWidth} />

<svelte:head>
	<title>Home</title>
</svelte:head>
<SideBar />
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
				<ul class="list-nav flex justify-around space-x-4 w-1/2 mx-auto group font-bold">
					<li><a href="/#Home" class="group-hover:opacity-50 hover:!opacity-100 transition-all duration-300">Home</a></li>
					<li><a href="/Services#hero" class="group-hover:opacity-50 hover:!opacity-100 transition-all duration-300">Services</a></li>
					<li><a href="/About#hero" class="group-hover:opacity-50 hover:!opacity-100 transition-all duration-300">About us</a></li>
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
					class="hidden md:block btn btn-sm variant-filled-primary"
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
