import { updateCompanySchema } from '$/components/ui/forms/schema/company.js';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const prerender = false;
export const ssr = false;
export const csr = true;

export const load = async ({ fetch, parent }) => {
	const form = await superValidate(zod(updateCompanySchema));
	return {
		form
	};
};
