import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

const baseTable = {
  id: int().primaryKey({ autoIncrement: true }),
  created_at: text()
    .$defaultFn(() => new Date().toISOString())
    .notNull(),
};

const timestamps = {
  updated_at: text(),
  deleted_at: text(),
};
export const startupsTable = sqliteTable("startups", {
  ...baseTable,
});
