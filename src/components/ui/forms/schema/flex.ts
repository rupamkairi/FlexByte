import { z } from 'zod';

export const createFlexSchema = z.object({
	flexTypeId: z.number().nullish().default(null),
	name: z.string(),
	width: z.string(),
	height: z.string(),
	area: z.string(),
	lat: z.number(),
	lng: z.number(),
	address: z.string()
});

export const updateFlexSchema = createFlexSchema.extend({
	id: z.number().optional()
});

export type UpdateFlexSchemaFormData = z.infer<typeof updateFlexSchema>;
