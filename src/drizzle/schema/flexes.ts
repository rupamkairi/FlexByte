import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { companiesTable } from './companies';

export const flexesTable = sqliteTable('flexes', {
	id: text('id').primaryKey(),
	name: text('name'),
	companyId: text('companyId').references(() => companiesTable.id, { onDelete: 'cascade' })
});
