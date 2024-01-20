import { Database } from "./database.js";
import { envs } from "../../../libs/envs.js";

const db = new Database(envs.URIMONGODB);

export async function ConnectToDatabase() {
  await db.connect();
}