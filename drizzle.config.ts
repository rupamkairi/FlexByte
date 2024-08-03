import type { Config } from 'drizzle-kit';

export default {
	schema: './src/drizzle/schema/*',
	out: './src/drizzle/migrations',
	dialect: 'sqlite',
	driver: 'turso',
	dbCredentials: {
		url: 'libsql://flexbyte-rupamkairi.turso.io',
		authToken:
			'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjI3MTYxOTcsImlkIjoiZGZjNjgwZGMtYmExNi00MTI0LThjMDctYmY1MmMxZmQ5NzVhIn0.pZpyPZJrc_r2XDImNghioLIVfB3V8Ly_KZvMRgGgd7qIr4bqorCtErqaNu3j8itmo294vWyAwfFjC0SxhbOwBA'
	}
} satisfies Config;
