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
		fdId: f.flex_details?.id,
		...f.flex_details,
		flId: f.flex_locations?.id,
		...f.flex_locations,
		...f.flexes
	};

	return json({ flex }, { status: 200 });
}

export async function PATCH(event) {
	const companyId = event.request.headers.get('companyid');
	if (!companyId) return json({ error: 'Company ID not provided' }, { status: 400 });

	const data = await event.request.json();

	const _flex = {
		id: data.id!,
		flexTypeId: data.flexTypeId,
		companyId: +companyId,
		name: data.name
	};

	const _flexDetails = {
		id: data.fdId!,
		flexId: data.id,
		width: +data.width,
		height: +data.height,
		area: +data.area
	};

	const _flexLocations = {
		id: data.flId!,
		flexId: data.id,
		address: data.address,
		latitude: data.latitude,
		longitude: data.longitude
	};

	let fId, fdId, flId;
	await db.transaction(async (tx) => {
		let [f] = await tx
			.update(flexesTable)
			.set(_flex)
			.where(eq(flexesTable.id, _flex.id))
			.returning();
		fId = f.id;

		let [fd] = await tx
			.update(flexDetailsTable)
			.set(_flexDetails)
			.where(eq(flexDetailsTable.id, _flexDetails.id))
			.returning();
		fdId = fd.id;

		let [fl] = await tx
			.update(flexLocationsTable)
			.set(_flexLocations)
			.where(eq(flexLocationsTable.id, _flexLocations.id))
			.returning();
		flId = fl.id;
	});

	const output = {
		flexId: fId,
		flexDetailsId: fdId,
		flexLocationsId: flId
	};

	return json(output, { status: 200 });
}
