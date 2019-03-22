const nombre = {
    demand: true,
    alias: 'n'
}

const matematicas = {
    demand: true,
    alias: 'm'
}

const ingles = {
    demand: true,
    alias: 'i'
}

const programacion = {
    demand: true,
    alias: 'p'
}
//Crear
const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}
//Mostrar
const mostrarest = {
    nombre
}


const argv = require('yargs')
    .command('crear', 'Crear un estudiante', creacion)
    .command('mostrar', 'Muestra los estudiantes y sus notas')
    .command('mostrarest', 'Muestra el estudiante con el nombre ingresado',mostrarest)
    .command('mostrarMat', 'Muestra si ganó matemáticas')
    .argv

module.exports = {
    argv
}