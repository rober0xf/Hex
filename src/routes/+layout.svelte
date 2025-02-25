<script lang="ts">
	// what is in this file appear in every page because its the root layout
	import '../app.css';
	import Header from '@/components/Header.svelte';
	let { children } = $props();

	$effect(() => {
		console.log('layout rendered');
	});
</script>

<svelte:head>
	<title>Hex</title>
</svelte:head>

<Header />

{@render children()}
<footer>copyright</footer>
