CREATE TABLE IF NOT EXISTS "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text,
	"mobile" text,
	"telephone" text,
	"address" text,
	"office" text,
	"road" text,
	"city" text,
	"pin" text,
	"district" text,
	"state" text,
	"companyId" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "flexe_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"width" real,
	"height" real,
	"area" real,
	"flexId" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "flexe_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
ALTER TABLE "flexes" ADD COLUMN "flexTypeId" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "contacts" ADD CONSTRAINT "contacts_companyId_companies_id_fk" FOREIGN KEY ("companyId") REFERENCES "public"."companies"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "flexe_details" ADD CONSTRAINT "flexe_details_flexId_flexes_id_fk" FOREIGN KEY ("flexId") REFERENCES "public"."flexes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "flexes" ADD CONSTRAINT "flexes_flexTypeId_flexe_types_id_fk" FOREIGN KEY ("flexTypeId") REFERENCES "public"."flexe_types"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
