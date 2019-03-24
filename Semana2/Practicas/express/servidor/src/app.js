const express = require ('express');
const app = express();
const path = require ('path');
const hbs = require('hbs');

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

//parcials
app.get('/calculos',(req, res) => {
    res.render('calculos', {
        estudiante: 'Jaime'
    });
});


app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});