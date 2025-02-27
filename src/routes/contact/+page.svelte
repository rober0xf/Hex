<script>
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<main class="container">
	<h1 class="text-6xl">Contact me</h1>

	<p>the best way to get in touch is through discord</p>

	<Button
		onclick={() => {
			console.log('you clicked this');
		}}
		href="/discord">follow on discord</Button
	>
	<p>you can follow us on:</p>

	<ul class="flex flex-col gap-4 py-4">
		<li><Button variant="outline" href="youtube">follow on youtube</Button></li>
		<li><Button variant="outline" href="/twitter">follow on twitter</Button></li>
	</ul>
</main>
