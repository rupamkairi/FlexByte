import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { companiesTable } from './companies';

export const contactsTable = pgTable('contacts', {
	id: serial('id').primaryKey(),
	email: text('email'),
	mobile: text('mobile'),
	telephone: text('telephone'),
	address: text('address'),
	office: text('office'),
	road: text('road'),
	city: text('city'),
	pin: text('pin'),
	district: text('district'),
	state: text('state'),

	companyId: integer('companyId').references(() => companiesTable.id, { onDelete: 'cascade' })
});
