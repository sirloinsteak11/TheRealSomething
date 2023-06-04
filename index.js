const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db_connection = require('./db_connection.js');
const db_interactions = require('./db_interactions.js');
app = express();
port = 8080;

// unknown whether uri and client is needed
/* uri = db_connection.uri;
client = db_connection.client;
runMongoDB = db_connection.runMongoDB; */

app.use('/', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('static/index.html');
})

app.post('/submit', (req, res) => {
  let data = req.body;
  res.send('data recieved');
  db_interactions.insertItem(data);
})

app.listen(port, () => {
  console.log(`server running on port ${port}, access webserver at \nhttp://127.0.0.1:${port}\nhttp://localhost:${port}`);
});

console.log('testing test');
// runMongoDB();