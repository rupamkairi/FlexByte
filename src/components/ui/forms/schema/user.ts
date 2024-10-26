import { z } from 'zod';

export const userSchema = z.object({
	companyId: z.number(),
	name: z.string(),
	clerkId: z.string()
});

export const updateUserSchema = userSchema.extend({
	id: z.number().optional()
});

export type UpdateUserSchemaFormData = z.infer<typeof updateUserSchema>;
