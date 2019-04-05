
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

  /*//Crear
  collection.insertOne({
      nombre:'Jaime',
      matematicas: 3,
      ingles: 4,
      prrogramacion: 5,
      lengua: 3
  }, (err, result) => {
      if(err){
          return console.log('error ingresando usuario')
      }
      return console.log(result.ops)
  })
*/
/*
//Leer
  collection.findOne({nombre: 'Jaime'},(err, resultado)=>{
    if(err){
        return console.log('error')
    }if(resultado){
        return console.log('no se encontrò el nombre')
    }
    console.log(resultado)
  })

  collection.find({matematicas:5}).toArray((err,resultados) => {
    if(err){
        return console.log('error')
    }
    console.log(resultados)
  })
*/

//Actualizar
/*
  collection.updateOne({nombre: 'Jaime'},
    {$set: {
        ingles: 5,
        programacion:3}}, 
    (err, resultado)=>{
        if(err){
            return console.log('error en actualizar')
        }
        console.log('Se actualizo correctamente' + resultado) 
    })

    collection.updateMany({matematicas: 3},
        {$set: {
            matematicas:4
        }},
        (err, resultado)=>{
            if(err){
                return console.log('error en actualizar')
            }
            console.log('Se actualizo correctamente' + resultado) 
        }
    )
*/
    collection.find({}).toArray((err,resultados) => {
        if(err){
            return console.log('error en buscar')
        }
        console.log(resultados)
    })
    collection.deleteOne({nombre: 'Jaime'}, (err, resultado) =>{
        if(err){
            return console.log('error en elminar')
        }
        console.log('Se ha eliminado el elemento' + resultado) 
    })
    collection.find({}).toArray((err,resultados) => {
        if(err){
            return console.log('error')
        }
        console.log(resultados)
        })

        collection.deleteMany({matematicas: {$lt :4}}, (err, resultado) =>{
            if(err){
                return console.log('error en elminar')
            }
            console.log('Se ha eliminado el elemento' + resultado) 
        })

        collection.find({}).toArray((err,resultados) => {
            if(err){
                return console.log('error')
            }
            console.log(resultados)
            })
  client.close();
});

