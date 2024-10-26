import { UpdateCompanySchemaFormData } from '$/components/ui/forms/schema/company';
import { writable } from 'svelte/store';

export const company = writable<UpdateCompanySchemaFormData | null>(null);
