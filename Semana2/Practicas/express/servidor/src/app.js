const express = require ('express');
const app = express();
const path = require ('path');
const hbs = require('hbs');
require('./helper');

const directorioPublico = path.join(__dirname,'../public')
const directorioPartials = path.join(__dirname, '../partials')
app.use(express.static(directorioPublico));
hbs.registerPartials(directorioPartials);

//console.log(__dirname)

//handlebars
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: 'Karen'
    });
});

app.get('/calculos',(req, res) => {
    console.log(req.query);
    res.render('calculos', {
       /* estudiante: 'Jaime',
        nota1: 4,
        nota2: 5,
        nota3: 3 */
        estudiante: req.query.nombre,
        nota1: parseInt(req.query.nota1),
        nota2: parseInt(req.query.nota2),
        nota3: parseInt(req.query.nota3)
    });
});

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});