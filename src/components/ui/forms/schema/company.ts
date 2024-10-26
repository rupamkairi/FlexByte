import { z } from 'zod';

export const companySchema = z.object({
	name: z.string(),
	email: z.string().email(),
	mobile: z.string(),
	telephone: z.string(),
	address: z.string(),
	office: z.string(),
	road: z.string(),
	city: z.string(),
	pin: z.string(),
	district: z.string(),
	state: z.string()
});

export const updateCompanySchema = companySchema.extend({
	id: z.number().optional()
});

export type UpdateCompanySchemaFormData = z.infer<typeof updateCompanySchema>;
