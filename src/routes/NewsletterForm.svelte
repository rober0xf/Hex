<script lang="ts">
	import Label from '@/components/ui/label/label.svelte';
	import * as Card from '$lib/components/ui/card/index';
	import * as Form from '$lib/components/ui/form';
	import Input from '@/components/ui/input/input.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { newsletter_schema, type NewsletterSchema } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { toast } from 'svelte-sonner';

	// the data input that the form will take
	type Props = {
		data: SuperValidated<Infer<NewsletterSchema>>;
	};
	let { data }: Props = $props();

	const form = superForm(data, {
		validators: zodClient(newsletter_schema),
		onUpdated: () => {
			toast.success('thank you for signing up');
		},
		onError: (error) => {
			toast.error('we had a problem signing up');
		}
	});
	const { form: formData, enhance, constraints } = form;
</script>

<Card.Root class="mx-auto max-w-prose">
	<Card.Header>
		<Card.Title tag="h2" class="text-xl">Sign up for updates</Card.Title>
		<Card.Description>Get the earliest information</Card.Description>
	</Card.Header>
	<form method="post" use:enhance>
		<Card.Content>
			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input type="email" {...props} {...$constraints.email} bind:value={$formData.email} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</Card.Content>
		<Card.Footer class="flex justify-end">
			<Button class="w-full">Sign up</Button>
		</Card.Footer>
	</form>
</Card.Root>
