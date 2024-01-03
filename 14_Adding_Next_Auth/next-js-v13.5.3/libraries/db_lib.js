import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  return await MongoClient.connect(process.env.MONGO_URI);
}

export async function insertToDocuments(client, name, data) {
  const db = client.db();
  await db.collection(name).insertOne(data);
  return client.close();
}

export async function createUser(client, name, userData) {
  const db = client.db();
  await db.collection(name).insertOne(userData);
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
