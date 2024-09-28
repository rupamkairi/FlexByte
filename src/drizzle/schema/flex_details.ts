import { integer, pgTable, real, serial } from 'drizzle-orm/pg-core';
import { flexesTable } from './flexes';

export const flexDetailsTable = pgTable('flex_details', {
	id: serial('id').primaryKey(),

	width: real('width'),
	height: real('height'),
	area: real('area'),

	flexId: integer('flexId').references(() => flexesTable.id, { onDelete: 'cascade' })
});
