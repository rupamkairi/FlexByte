import { z } from 'zod';

export const createFlexSchema = z.object({
	flexTypeId: z.number().nullish().default(null),
	name: z.string()
});
