<script lang="ts">
	// import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Logo from '$lib/Logo.svelte';
	import LogoFull from '$lib/LogoFull.svelte';

	import { onDestroy, onMount } from 'svelte';
	import { Layout } from '$lib/stores/LayoutStore';

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
	});

	onDestroy(() => {
		main?.removeEventListener('scroll', scrollHandler);
	});
</script>

<!-- App Shell -->
<AppShell
	slotSidebarLeft="bg-surface-500/5 w-56 p-4"
	slotHeader="z-20"
	slotPageContent="relative scroll-smooth bg-surface-50/5 z-10"
	slotFooter="z-20"
	class="scroll-smooth"
>
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
			<nav class="md:flex w-full hidden">
				<ul class="flex justify-center space-x-4 w-full">
					<li><a href="#Home">Home</a></li>
					<li><a href="#Services">Services</a></li>
					<li><a href="#About">About us</a></li>
				</ul>
			</nav>
			<!-- </svelte:fragment> -->
			<svelte:fragment slot="trail">
				<!-- <LightSwitch /> -->
				<a
					class="btn btn-sm btn-ghost-surface hidden md:block"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer">Discord</a
				>
				<!-- call now primary button -->
				<a class="btn btn-sm btn-filled-primary" href="tel:+1-800-555-5555" rel="noreferrer"
					>Contact us</a
				>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->

	<slot />
	<!-- <svelte:fragment slot="footer"> -->
	<footer class="bg-surface-500/5 p-4 z-20">
		<div class="flex justify-between">
			<div class="flex items-center">
				<LightSwitch />
				<span class="ml-2">Light/Dark</span>
			</div>
			<div class="flex items-center">
				<span class="mr-2">Made with ❤️ by</span>
				<a
					class="btn btn-sm btn-ghost-surface"
					href="https://twitter.com/justmrmendez"
					target="_blank"
					rel="noreferrer">Mr. Mendez</a
				>
			</div>
		</div>
	</footer>
	<!-- </svelte:fragment> -->
</AppShell>
