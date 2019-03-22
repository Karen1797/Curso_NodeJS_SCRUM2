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
    listaEstudiantes.push(est);
    console.log(listaEstudiantes);
    guardar();
}

//Agregar varios archivos JSON
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

module.exports = {
    crear
}