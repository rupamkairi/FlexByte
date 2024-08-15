import { json } from '@sveltejs/kit';

export async function POST(event) {
	console.log(await event.request.json());
	return json({ message: 'Hello Companies' });
}
