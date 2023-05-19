CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"taskname" VARCHAR(250) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE,
	"time" DATE	
);