const { MongoClient, ServerApiVersion } = require('mongodb');
const db_connection = require("./db_connection.js");

const uri = db_connection.uri;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function insertItem(item) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const dbo = client.db("test");
    const insertedItem = await dbo.collection("test-1").insertOne(item);
    console.log(`1 doc inserted, bearing id ${insertedItem.insertedId}\n document: ${JSON.stringify(item)}`);
  } catch (e) {
    throw e;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports.insertItem = insertItem;
