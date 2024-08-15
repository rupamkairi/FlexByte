import { json } from '@sveltejs/kit';
import { db } from '../../../drizzle/db.js';
import { usersTable } from '../../../drizzle/schema/users.js';
import { eq } from 'drizzle-orm';
import { companiesTable } from '../../../drizzle/schema/companies.js';

export async function POST(event) {
	const { clerkUserId } = await event.request.json();
	console.log({ clerkUserId });

	let u, c;
	await db.transaction(async (tx) => {
		[u] = await tx.select().from(usersTable).where(eq(usersTable.clerkId, clerkUserId));
		[c] = await tx.select().from(companiesTable).where(eq(companiesTable.id, u.companyId!));
	});

	return json({ user: u, company: c });
}
