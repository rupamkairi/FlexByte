import { json } from '@sveltejs/kit';
import { db } from '$/drizzle/db';
import { flexTypesTable } from '$/drizzle/schema/flex_types';

export async function GET() {
	const ft = await db.select().from(flexTypesTable);
	let body = { flex_types: ft };
	return json(body);
}
