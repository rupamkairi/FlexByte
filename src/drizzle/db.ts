import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres({
	host: 'flexbyte-rupamkairi.i.aivencloud.com',
	port: 12691,
	user: 'avnadmin',
	pass: 'AVNS_I0Vkl_x0FfisenJOh9h',
	db: 'defaultdb',
	ssl: 'require'
});
export const db = drizzle(client);
