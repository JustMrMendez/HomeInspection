<script lang="ts">
	import { SEO } from './SEO';

	export let metaDescription: string = SEO.description;
	export let title: string;

	const pageTitle = `${title} | ${SEO.title}`;
</script>

<!-- component to set base SEO metatags -->
<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#ffffff" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@sveltejs" />
	<meta name="twitter:creator" content="@sveltejs" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={metaDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:site_name" content={SEO.title} />
	<meta property="og:url" content={SEO.title} />
	<link rel="icon" type="image/svg+xml" href="/logo.svg" />
	<!-- SEO.keywords -->
	<meta name="keywords" content={SEO.keywords} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
</svelte:head>
