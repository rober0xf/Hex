import { fail, message, superValidate } from 'sveltekit-superforms';
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
			return message(form, { type: 'error', text: 'we had a problem signing up' });
		}

		console.log('TODO: create a contact for this email:', email);

		// using the app.d.ts custom return
		return message(form, { type: 'success', text: 'thank you for signing up' });
	}
};
