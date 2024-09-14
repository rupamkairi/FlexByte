import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { companiesTable } from './companies';
import { flexTypesTable } from './flex_types';

export const flexesTable = pgTable('flexes', {
	id: serial('id').primaryKey(),
	name: text('name'),

	flexTypeId: integer('flexTypeId').references(() => flexTypesTable.id, { onDelete: 'cascade' }),
	companyId: integer('companyId').references(() => companiesTable.id, { onDelete: 'cascade' })
});
