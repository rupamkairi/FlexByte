import { json } from '@sveltejs/kit';
import { db } from '../../../drizzle/db.js';
import { usersTable } from '../../../drizzle/schema/users.js';
import { eq } from 'drizzle-orm';
import { companiesTable } from '../../../drizzle/schema/companies.js';
import { contactsTable } from '../../../drizzle/schema/contacts.js';

export async function POST(event) {
	const { clerkUserId } = await event.request.json();
	// console.log({ clerkUserId });
	let u, c;
	await db.transaction(async (tx) => {
		[u] = await tx.select().from(usersTable).where(eq(usersTable.clerkId, clerkUserId));
		[c] = await tx
			.select({ ...companiesTable, contacts: contactsTable } as any)
			.from(companiesTable)
			.where(eq(companiesTable.id, u.companyId!))
			.leftJoin(contactsTable, eq(contactsTable.companyId, companiesTable.id));
	});

	return json({ user: u, company: c });
}
