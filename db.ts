import { Database, MongoDBConnector } from 'https://deno.land/x/denodb/mod.ts';
import Post from './models/post.ts'
import { config } from "https://deno.land/x/dotenv/mod.ts";

config({ export: true })

// use of `!` indicates to TS that those variables are required and therefore only of type string
const connector = new MongoDBConnector({
  uri: Deno.env.get('DB_URI')!,
  database: Deno.env.get('DB_DATABASE')!,
});

const db = new Database(connector);
db.link([Post]);

export default db