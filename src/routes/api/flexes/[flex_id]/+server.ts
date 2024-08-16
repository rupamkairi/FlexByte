import { eq } from 'drizzle-orm';
import { db } from '../../../../drizzle/db.js';
import { flexesTable } from '../../../../drizzle/schema/flexes.js';
import { json } from '@sveltejs/kit';

export async function GET(event) {
	const flex_id = event.params.flex_id;
	const [f] = await db.select().from(flexesTable).where(eq(flexesTable.id, +flex_id));
	return json({ flex: f });
}
