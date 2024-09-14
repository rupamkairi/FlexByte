ALTER TABLE "flexe_types" RENAME TO "flex_details";--> statement-breakpoint
ALTER TABLE "flexe_details" RENAME TO "flex_types";--> statement-breakpoint
ALTER TABLE "flex_types" DROP CONSTRAINT "flexe_details_flexId_flexes_id_fk";
--> statement-breakpoint
ALTER TABLE "flexes" DROP CONSTRAINT "flexes_flexTypeId_flexe_types_id_fk";
--> statement-breakpoint
ALTER TABLE "flex_types" ADD COLUMN "name" text;--> statement-breakpoint
ALTER TABLE "flex_details" ADD COLUMN "width" real;--> statement-breakpoint
ALTER TABLE "flex_details" ADD COLUMN "height" real;--> statement-breakpoint
ALTER TABLE "flex_details" ADD COLUMN "area" real;--> statement-breakpoint
ALTER TABLE "flex_details" ADD COLUMN "flexId" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "flex_details" ADD CONSTRAINT "flex_details_flexId_flexes_id_fk" FOREIGN KEY ("flexId") REFERENCES "public"."flexes"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "flexes" ADD CONSTRAINT "flexes_flexTypeId_flex_types_id_fk" FOREIGN KEY ("flexTypeId") REFERENCES "public"."flex_types"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "flex_types" DROP COLUMN IF EXISTS "width";--> statement-breakpoint
ALTER TABLE "flex_types" DROP COLUMN IF EXISTS "height";--> statement-breakpoint
ALTER TABLE "flex_types" DROP COLUMN IF EXISTS "area";--> statement-breakpoint
ALTER TABLE "flex_types" DROP COLUMN IF EXISTS "flexId";--> statement-breakpoint
ALTER TABLE "flex_details" DROP COLUMN IF EXISTS "name";