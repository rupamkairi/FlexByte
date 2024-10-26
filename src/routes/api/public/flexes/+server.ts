import { db } from '$/drizzle/db';
import { flexesTable, flexLocationsTable } from '$/drizzle/schema';
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function GET(event) {
	const fs = await db
		.select({
			...flexLocationsTable,
			...flexesTable
		})
		.from(flexesTable)
		.leftJoin(flexLocationsTable, eq(flexLocationsTable.flexId, flexesTable.id));

	return json({ flexes: fs });
}
