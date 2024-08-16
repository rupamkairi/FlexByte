import { json } from '@sveltejs/kit';
import { db } from '../../../drizzle/db';
import { flexesTable } from '../../../drizzle/schema';
import { eq } from 'drizzle-orm';

export async function GET(event) {
	const companyId = event.request.headers.get('companyid');
	if (!companyId) return json({ flexes: [] });
	const fs = await db.select().from(flexesTable).where(eq(flexesTable.companyId, +companyId));
	return json({ flexes: fs });
}
