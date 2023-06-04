const express = require('express');
const bodyParser = require('body-parser');
const db_connection = require('./db_connection.js');
const db_interactions = require('./db_interactions.js');
app = express();
port = 8080;

// unknown whether uri and client is needed
/* uri = db_connection.uri;
client = db_connection.client;
runMongoDB = db_connection.runMongoDB; */

db_interactions.insertItem({ name: "Leo the Farmer", occupation: 'farmer', personalityID: 'stingy' });

app.use('/', express.static('static'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile('static/index.html');
})

app.post('/submit', (req, res) => {
  let data = req.body;
  console.log(`data has been recieved, ${JSON.stringify(data)}`);
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

console.log('testing test');
// runMongoDB();