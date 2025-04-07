import { z } from 'zod';

// zod its the form validator
export const newsletter_schema = z.object({
	email: z.string().email()
});

export type NewsletterSchema = typeof newsletter_schema;
