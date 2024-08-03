import { json } from '@sveltejs/kit';
import { db } from '../../../drizzle/db';
import { flexesTable } from '../../../drizzle/schema';

export async function GET() {
	const _flexes = await db.select().from(flexesTable);
	return json({ flexes: _flexes });
}
