import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  return await MongoClient.connect(process.env.MONGO_URI);
}

export async function insertToDocuments(client, name, data) {
  const db = client.db();
  await db.collection(name).insertOne(data);
  client.close();
}

export async function getDocumentData(client, name, filter = {}) {
  const db = client.db();
  const data = await db
    .collection(name)
    .find(filter)
    .sort({ _id: -1 })
    .toArray();
  client.close();
  return data;
}
