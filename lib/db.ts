import { Kysely, MysqlDialect } from "kysely";
import { createPool } from "mysql2";

export interface Stats {
  slug: string;
  likes: number;
  views: number;
}

export interface Session {
  id: string;
  createdAt: Date;
}

interface Database {
  stats: Stats;
  session: Session;
}

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw Error("No Database Connection");
}

const dialect = new MysqlDialect({
  pool: createPool(DATABASE_URL),
});

export const db = new Kysely<Database>({ dialect });
