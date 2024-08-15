CREATE TABLE IF NOT EXISTS "companies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "flexes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"companyId" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerkId" text,
	"companyId" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "flexes" ADD CONSTRAINT "flexes_companyId_companies_id_fk" FOREIGN KEY ("companyId") REFERENCES "public"."companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_companyId_companies_id_fk" FOREIGN KEY ("companyId") REFERENCES "public"."companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
