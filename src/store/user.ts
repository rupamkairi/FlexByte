import { UpdateUserSchemaFormData } from '$/components/ui/forms/schema/user';
import { writable } from 'svelte/store';

export const clerkUser = writable(null);
export const user = writable<UpdateUserSchemaFormData | null>(null);
