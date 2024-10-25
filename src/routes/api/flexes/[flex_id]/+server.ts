import { db } from '$/drizzle/db.js';
import {
	flexDetailsTable,
	flexLocationsTable,
	flexTypesTable,
	flexesTable
} from '$/drizzle/schema';
import { json } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function GET(event) {
	const flex_id = event.params.flex_id;
	const [f] = await db
		// .select({ ...flexesTable, details: flexDetailsTable, type: flexTypesTable })
		.select()
		.from(flexesTable)
		.where(eq(flexesTable.id, +flex_id))
		.leftJoin(flexTypesTable, eq(flexTypesTable.id, flexesTable.flexTypeId))
		.leftJoin(flexDetailsTable, eq(flexDetailsTable.flexId, flexesTable.id))
		.leftJoin(flexLocationsTable, eq(flexLocationsTable.flexId, flexesTable.id));

	const flex = {
		// flexTypeId: f.flex_types?.id,
		...f.flex_details,
		...f.flex_locations,
		...f.flexes
	};

	return json({ flex });
}

export async function PATCH(event) {
	return json({});
}
