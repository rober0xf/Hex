<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Footer from '@/components/Footer.svelte';

	// what is in this file appear in every page because its the root layout
	import '../app.css';
	import Header from '@/components/Header.svelte';
	let { children } = $props();

	$effect(() => {
		console.log('layout rendered');
	});

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
</script>

<svelte:head>
	<title>Hex</title>
</svelte:head>

<Header />

{@render children()}

<Footer />
