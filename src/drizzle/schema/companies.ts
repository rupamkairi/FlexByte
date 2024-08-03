import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const companiesTable = sqliteTable('companies', {
	id: text('id').primaryKey(),
	name: text('name')
});
