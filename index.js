const express = require('express');
const db_connection = require('./db_connection.js');
const db_interactions = require('./db_interactions.js');
app = express();
port = 8080;

// unknown whether uri and client is needed
/* uri = db_connection.uri;
client = db_connection.client;
runMongoDB = db_connection.runMongoDB; */

db_interactions.insertItem({ name: 'gah', age: 29 });

app.use('/', express.static('static'));

app.get('/', () => {
  res.sendFile('static/index.html');
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

console.log('testing test');
// runMongoDB();