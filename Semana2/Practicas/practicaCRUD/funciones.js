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

//Función Mostrar (Read)
const mostrar = () => {
    listar();
    listaEstudiantes.forEach(estudiante => {
        console.log(estudiante.nombre);
        console.log('notas: ');
        console.log(' Matemáticas ' + estudiante.matematicas);
        console.log(' Inglés ' + estudiante.ingles);
        console.log(' Programación ' + estudiante.programacion + ' \n');
    })
}

const mostrarest = (nom) => {
    listar();
    let est = listaEstudiantes.find(buscar => buscar.nombre == nom);
    if(!est){
        console.log('No existe ese nombre');
    }else{
        console.log(est.nombre);
        console.log('notas: ');
        console.log(' Matemáticas ' + est.matematicas);
        console.log(' Inglés ' + est.ingles);
        console.log(' Programación ' + est.programacion + ' \n');
    }
}

const mostrarMat = () => {
    listar();
    //La función filter devuelve un vector
    let gana = listaEstudiantes.filter(est => est.matematicas >= 3);
    if(gana.length == 0){
        console.log('Ningún estudiante ganó');
    }else{
        gana.forEach(est => {
            console.log(est.nombre);
            console.log('notas: ');
            console.log(' Matemáticas ' + est.matematicas);
        });
    }
}

module.exports = {
    crear,
    mostrar,
    mostrarest,
    mostrarMat
}