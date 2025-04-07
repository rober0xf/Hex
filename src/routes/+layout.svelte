<script lang="ts">
	import '@fontsource-variable/work-sans';
	import { onNavigate } from '$app/navigation';
	import Footer from '@/components/Footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index';

	// what is in this file appear in every page because its the root layout
	import '../app.css';
	import Header from '@/components/Header.svelte';
	import { page } from '$app/stores';

	const hardcoded_meta = {
		title: 'Hex',
		description: 'Fitness App',
		og: '/og.png'
	};
	let { children } = $props();
	let title = $derived(
		$page.data.meta?.title ? `${$page.data.meta?.title} | Hex` : hardcoded_meta.title
	);
	let description = $derived(
		$page.data.meta?.description ? $page.data.meta?.description : hardcoded_meta.description
	);
	let ogImageUrl = $derived(
		`${$page.url.origin}${$page.data.meta?.og ? $page.data.meta?.og : hardcoded_meta.og}`
	);

	// handles page transitions animation when navigating
	onNavigate((navigation) => {
		if (
			typeof document.startViewTransition !== 'undefined' &&
			navigation.from?.url.href !== navigation.to?.url.href // ensure the navigation is between different pages
		) {
			if (navigation.delta && navigation.delta < 0) {
				// if its going backward
				document.documentElement.dataset.back = 'true';
			} else {
				document.documentElement.removeAttribute('data-back'); // remove the attribute if going forward or another page
			}
			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
			});
		}
	});

	$effect(() => {
		// we have playwright wait for this before starting any test
		document.documentElement.dataset.testid = 'hydrated';
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Hex" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={ogImageUrl} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Header />

{@render children()}
<!-- message when click sign up -->
<Toaster />
<Footer />
