import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as env from '$env/static/private';

const client = postgres({
	host: env.DB_HOST!,
	port: +env.DB_PORT!,
	user: env.DB_USER!,
	pass: env.DB_PASS!,
	db: env.DB_NAME!,
	ssl: 'require'
});
export const db = drizzle(client);
