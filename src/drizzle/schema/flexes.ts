import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { companiesTable } from './companies';

export const flexesTable = pgTable('flexes', {
	id: serial('id').primaryKey(),
	name: text('name'),
	companyId: integer('companyId').references(() => companiesTable.id, { onDelete: 'cascade' })
});
