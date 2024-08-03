import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { companiesTable } from './companies';

export const usersTable = sqliteTable('users', {
	id: text('id').primaryKey(),
	clerkId: text('clerkId'),
	companyId: text('companyId').references(() => companiesTable.id, { onDelete: 'cascade' })
});
