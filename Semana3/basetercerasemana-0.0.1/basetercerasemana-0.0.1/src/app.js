//Requires
const express = require('express')
const app = express ()
const path = require('path')
const hbs = require ('hbs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Estudiante = require('./models/estudiante')
require('./helpers/helpers')
require('./config/config');


//Paths
const dirPublic = path.join(__dirname, "../public")
const dirViews = path.join(__dirname, '../template/views')
const dirPartials = path.join(__dirname, '../template/partials')
const dirNode_modules = path.join(__dirname , '../node_modules')

//Static
app.use(express.static(dirPublic))
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));


//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

//hbs
app.set('view engine', 'hbs')
app.set('views', dirViews)
hbs.registerPartials(dirPartials)

//Views
app.get('/', (req, res ) => {
	res.render('index', {
		titulo: 'Inicio'		
	})	
});




app.post('/calculos', (req, res ) => {
	res.render('calculos', {
		titulo: 'Calcular Promedio',
		estudiante : {	
				nombre: req.body.nombre,
				matematicas: parseInt(req.body.matematicas),
				ingles: parseInt(req.body.ingles),
				programacion: parseInt(req.body.programacion)
				}	
	})	
});

app.get('/listado', (req, res ) => {
	res.render('listado', {
		titulo: 'Listado de Estudiantes'		
	})	
});

app.get('/actualizar', (req, res ) => {
	res.render('actualizar', {
		titulo: 'Actualizar un Curso'		
	})	
});

app.post('/actualizar', (req, res ) => {
	res.render('actualizarPost', {
		titulo: 'Actualizar un Curso',
		nombre: req.body.nombre,
		asignatura: req.body.asignatura,
		nota: parseInt(req.body.nota)
	})	
});


app.get('*',(req,res)=> {
	res.render('error', {
		titulo: "Error 404"
	})
});

//app.use(require('./routes/index'));

//MONGODB

//Crear

app.post('/', (req, res ) => {
	let estudiante = new Estudiante ({
		nombre: req.body.nombre,
		matematicas: req.body.matematicas,
		ingles: req.body.ingles,
		programacion: req.body.programacion
	})

	estudiante.save((err, resultado) =>{
		if(err){
			res.render('indexpost', {
				mostrar : err
			})
		}
		res.render('indexpost', {
			mostrar : resultado
		})
	})
	/*
	res.render('indexpost', {
		titulo: 'Inicio',
		nombre: req.body.usuario		
	})	*/
});

//Leer



//Mongoose
mongoose.connect('mongodb://localhost:27017/asignaturas',
	{useNewUrlParser: true}, (err, resultado) => {
		if(err){
			return console.log(error)
		}
		console.log('Conectado')
	}
)


app.listen(process.env.PORT, () => {
	console.log ('servidor en el puerto ' + process.env.PORT)
});