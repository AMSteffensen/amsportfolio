import Dexie from "dexie";

// Create a Dexie database
const db = new Dexie("ContentCacheDB");
db.version(1).stores({
  content: "key, value",
});

export default db;
