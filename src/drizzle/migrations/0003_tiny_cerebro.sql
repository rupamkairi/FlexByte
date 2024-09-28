CREATE TABLE IF NOT EXISTS "flex_locations" (
	"id" serial PRIMARY KEY NOT NULL,
	"latitude" real,
	"longitude" real,
	"flexId" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "flex_locations" ADD CONSTRAINT "flex_locations_flexId_flexes_id_fk" FOREIGN KEY ("flexId") REFERENCES "public"."flexes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
