import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const flexTypesTable = pgTable('flex_types', {
	id: serial('id').primaryKey(),

	name: text('name')
});
