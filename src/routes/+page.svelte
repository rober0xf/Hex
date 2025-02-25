<script lang="ts">
	import { Button } from '@/components/ui/button';

	import Hero from './Hero.svelte';
</script>

<Hero />
<section class="container flex items-center justify-center gap-4 py-8">
	<Button variant="outline" href="/program">Create your own program</Button>
	<Button variant="outline" href="/about">About us</Button>
	<Button
		variant="outline"
		onclick={() => {
			console.log('someone clicked the contact button');
		}}
		href="/contact">Contact me</Button
	>
</section>
