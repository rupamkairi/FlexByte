import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { companiesTable } from './companies';

export const usersTable = pgTable('users', {
	id: serial('id').primaryKey(),
	clerkId: text('clerkId'),
	companyId: integer('companyId').references(() => companiesTable.id, { onDelete: 'cascade' })
});
