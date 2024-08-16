import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/drizzle/schema/*',
	out: './src/drizzle/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
		host: process.env.DB_HOST!,
		port: +process.env.DB_PORT!,
		user: process.env.DB_USER!,
		password: process.env.DB_PASS!,
		database: process.env.DB_NAME!,
		ssl: 'require'
	}
});
