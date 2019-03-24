const express = require ('express');
const app = express();
const path = require ('path');
const hbs = require('hbs');

const directorioPublico = path.join(__dirname,'../public')
app.use(express.static(directorioPublico));

//console.log(__dirname)

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: 'Karen'
    });
});

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});