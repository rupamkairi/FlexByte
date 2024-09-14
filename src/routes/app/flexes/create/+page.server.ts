import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { createFlexSchema } from '../../../../components/ui/forms/schema/flex';

export const load = async () => {
	const form = await superValidate(zod(createFlexSchema));
	return { form };
};
