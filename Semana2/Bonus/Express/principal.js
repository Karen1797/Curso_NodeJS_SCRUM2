
const {crearArchivo} = require('./datos');

//Información de cursos
let cursos = [{
    idCurso: 1,
    nombre: 'Programación aplicada',
    duracion: 240,
    precio: 200000
},
{
    idCurso: 2,
    nombre: 'Técnicas digitales',
    duracion: 180,
    precio: 150000
},
{
    idCurso: 3,
    nombre: 'Cálculo vectorial',
    duracion: 300,
    precio: 250000
}];

//Listar cursos
let estudio = (cursos, callback) => {
    let opciones=[];
    for (let i = 0; i < cursos.length; i++) {
            opciones[i] = `El id del curso ${cursos[i].nombre} es ${cursos[i].idCurso}, tiene una duración de ${cursos[i].duracion} horas y un valor de ${cursos[i].precio} pesos.`;
            setTimeout(() => {
                callback(opciones[i]);
            }, 2000*i);
    }    
}

//Yargs
const informacion = {
    id: {
        demand: true,
        alias: 'a'
    },
    nombreEstudiante: {
        demand: true,
        alias: 'b'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs').command('inscribir','Inscribirse a un curso', informacion).argv;

//Aleta de ID no existente
const alerta = (i) => {
    if (i == 0){
        console.log('Usted ha ingresado un ID que no corresponde a ningún curso ofrecido. Por favor verifique su elección.')
        estudio(cursos, function(opciones) {console.log(opciones)});
    }
}

//Proceso de inscripción
if (argv._[0] == 'inscribir') {
    for (let i = 0; i < cursos.length; i++) {
        module.exports = {
            cursos,
            argv,
            i
        };
        if(argv.id == cursos[i].idCurso){
            crearArchivo(function(texto){});
            i=cursos.length;
        }else {
           if(argv.id<=0 || argv.id>cursos.length){
               alerta(i);
           }
        }
    }
    
} else {
    estudio(cursos, function(opciones){console.log(opciones)});    
}


