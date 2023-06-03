const db_connection = require('./db_connection.js');

const uri = db_connection.uri;
const client = db_connection.client;

async function insertItem(item) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const dbo = client.db("test");
        const myobj = item;
        dbo.collection('test-1').insertOne(myobj, (err, res) => {
            if (err) throw err;
            console.log('1 doc inserted');
        })
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } catch (e) {
        console.log(e);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

module.exports.insertItem = insertItem;