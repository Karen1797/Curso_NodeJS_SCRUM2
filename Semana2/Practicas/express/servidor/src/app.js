const express = require ('express');
const app = express();
const path = require ('path');

const directorioPublico = path.join(__dirname,'../public')
app.use(express.static(directorioPublico));

console.log(__dirname)

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});