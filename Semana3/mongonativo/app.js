
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'asignaturas';

// Create a new MongoClient
const client = new MongoClient(url,  { useNewUrlParser: true } );

// Use connect method to connect to the Server
client.connect(function(err) {
    if(err){
        return console.log('No se ha conectado')
    }
  //assert.equal(null, err);
  console.log("Conectado");

  const db = client.db(dbName);

  const collection = db.collection('estudiantes');

  client.close();
});