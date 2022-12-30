import * as dotenv from 'dotenv';
import pkg from 'pg';
const { Client } = pkg;

dotenv.config()
const connectionString = process.env.PGHOST

const client = new Client({
  connectionString
  // host: 'localhost',
  // port: 5432,
  // user: 'root',
  // password: 'root',
  // database: 'users',
});

client.connect();

export async function Query(query, values){
  const { rows } = await client.query(query, values);
  return rows;
}
