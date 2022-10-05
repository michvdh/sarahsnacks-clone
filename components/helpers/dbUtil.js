// import { MongoClient } from "mongodb";

// export async function connectDatabase() {
//   const client = await MongoClient.connect('mongodb+srv://michael:Office365!@ssc-cluster.yznvztt.mongodb.net/sscdb?retryWrites=true&w=majority');

//   return client;
// }

// export async function getAllProducts(client, collection) {
//   const db = client.db();

//   const products = await db.collection(collection).find().toArray();

//   return products;
// }