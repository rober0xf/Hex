import { error } from '@sveltejs/kit';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { newsletter_schema } from './schema';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	feedback_form: await superValidate(zod(newsletter_schema))
});

// handle the form input (sign up for updates)
export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(newsletter_schema));
		if (!form.valid) {
			return fail(400, { form });
		}

		const { email } = form.data;
		if (email.includes('error')) {
			error(500, 'server error');
		}
		console.log('TODO: create a contact for this email:', email);

		return form;
	}
};
