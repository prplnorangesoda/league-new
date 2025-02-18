import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { startupsTable } from "./db/schema";

async function main() {
  const sqlite = new Database(process.env.DB_FILE_NAME!, { create: true });
  const db = drizzle({ client: sqlite });

  console.log("Hello via Bun!");

  await db.insert(startupsTable).values({});

  console.log(
    "Startups: " +
      JSON.stringify(await db.select().from(startupsTable), undefined, 2)
  );
}

main();
