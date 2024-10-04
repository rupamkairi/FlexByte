import { json } from '@sveltejs/kit';
import { db } from '../../../drizzle/db';
import { flexesTable } from '../../../drizzle/schema';
import { eq } from 'drizzle-orm';
import { flexDetailsTable } from '$/drizzle/schema/flex_details';
import { flexLocationssTable } from '$/drizzle/schema/flex_locations';

export async function GET(event) {
	const companyId = event.request.headers.get('companyid');
	if (!companyId) return json({ flexes: [] });
	const fs = await db.select().from(flexesTable).where(eq(flexesTable.companyId, +companyId));
	return json({ flexes: fs });
}

export async function POST(event) {
	const companyId = event.request.headers.get('companyid');
	if (!companyId) return json({ error: 'Company ID not provided' }, { status: 400 });

	const data = await event.request.json();

	let fId, fdId, flId;
	await db.transaction(async (tx) => {
		let [f] = await tx
			.insert(flexesTable)
			.values({ name: data.name, companyId: +companyId, flexTypeId: +data.flexTypeId })
			.returning({ insertedId: flexesTable.id });
		fId = f.insertedId;

		let [fd] = await tx
			.insert(flexDetailsTable)
			.values({ flexId: f.insertedId, width: +data.width, height: +data.height, area: +data.area })
			.returning({ insertedId: flexDetailsTable.id });
		fdId = fd.insertedId;
		let [fl] = await tx
			.insert(flexLocationssTable)
			.values({
				flexId: f.insertedId,
				latitude: +data.lat,
				longitude: +data.lng,
				address: data.address
			})
			.returning({ insertedId: flexLocationssTable.id });
		flId = fl.insertedId;
	});

	const output = {
		flexId: fId,
		flexDetailsId: fdId,
		flexLocationsId: flId
	};

	return json(output, { status: 201 });
}
