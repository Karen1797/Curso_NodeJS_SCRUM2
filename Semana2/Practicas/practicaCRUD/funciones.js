const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let est = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };
    let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre);
    if(!duplicado){
        listaEstudiantes.push(est);
        console.log(listaEstudiantes);
        guardar();
    }else{
        console.log('Ya existe un estudiante con ese nombre');
    }
}

//Agregar varios objetos JSON
const listar = () =>  {
    try {
    //Opcion 1
    listaEstudiantes = require('./Listado.json');

    //Opción 2: Si el JSON varía de forma asincrónica
    //listaEstudiantes = JSON.parse(fs.readFileSync('Listado.json'));
    }
    catch(error) {
        listaEstudiantes = [];
    }
}

const guardar = () => {
    let datos = JSON.stringify(listaEstudiantes);
    fs.writeFile('Listado.json', datos, (err) => {
        if (err) throw (err);
        console.log('Archivo creado');
    })
}


const mostrar = () => {
    listar();
    listaEstudiantes.map(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas: ');
        console.log(' Matemáticas ' + estudiante.matematicas);
        console.log(' Inglés ' + estudiante.ingles);
        console.log(' Programación ' + estudiante.programacion + ' \n');
    })
}
module.exports = {
    crear,
    mostrar
}