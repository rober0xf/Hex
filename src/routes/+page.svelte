<script lang="ts">
	import Button from '@/components/ui/button/button.svelte';
	import Hero from './Hero.svelte';
	import NewsletterForm from './NewsletterForm.svelte';
	import type { superForm } from 'sveltekit-superforms';
	import { zod, zodClient } from 'sveltekit-superforms/adapters';
	import { newsletter_schema } from './schema';

	// it gets the validation from feedback_form. thanks by the PageServerLoad
	let { data } = $props();
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

<section>
	<NewsletterForm data={data.feedback_form}></NewsletterForm>
</section>
