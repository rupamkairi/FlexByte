import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { createFlexSchema, updateFlexSchema } from '$/components/ui/forms/schema/flex';
import axios from 'axios';

export const load = async ({ params }) => {
	// console.log('1');
	const form = await superValidate(zod(updateFlexSchema));
	return { form };
};
