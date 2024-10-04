import { integer, pgTable, real, serial, text } from 'drizzle-orm/pg-core';
import { flexesTable } from './flexes';

export const flexLocationssTable = pgTable('flex_locations', {
	id: serial('id').primaryKey(),

	latitude: real('latitude'),
	longitude: real('longitude'),

	address: text('address'),

	flexId: integer('flexId').references(() => flexesTable.id, { onDelete: 'cascade' })
});
