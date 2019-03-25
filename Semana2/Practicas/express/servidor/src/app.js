const express = require ('express');
const app = express();
const path = require ('path');
const hbs = require('hbs');
require('./helpers/helper');
const bodyParser = require('body-parser');
const dirNode_modules = path.join(__dirname , '../node_modules')

const directorioPublico = path.join(__dirname,'../public')
const directorioPartials = path.join(__dirname, '../partials')
app.use(express.static(directorioPublico));
hbs.registerPartials(directorioPartials);

//Bootstrap
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));


app.use(bodyParser.urlencoded({extended: false}));

//console.log(__dirname)

//handlebars
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: 'Karen'
    });
});
/*
//Cuando se usa get
app.get('/calculos',(req, res) => {
    console.log(req.query);
    res.render('calculos', {
       /* estudiante: 'Jaime',
        nota1: 4,
        nota2: 5,
        nota3: 3 */
        /*estudiante: req.query.nombre,
        nota1: parseInt(req.query.nota1),
        nota2: parseInt(req.query.nota2),
        nota3: parseInt(req.query.nota3)
    });
});
*/
//Cuando se usa post -> mas seguro
app.post('/calculos',(req, res) => {
    res.render('calculos', {
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)
    });
});

//funcion que redirige a una página genérica
app.get('*', (req, res) => {
    res.render('error', {
        estudiante:'error'
    });
});

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});