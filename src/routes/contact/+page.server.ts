import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = () => ({
	meta: {
		title: 'Contact',
		description: 'Find where to contact us'
	}
});
