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
const promedioEst = {
    nombre
}

const argv = require('yargs')
    .command('crear', 'Crear un estudiante', creacion)
    .command('mostrar', 'Muestra los estudiantes y sus notas')
    .command('mostrarest', 'Muestra el estudiante con el nombre ingresado', mostrarest)
    .command('mostrarMat', 'Muestra si ganó matemáticas')
    .command('promedioEst', 'Muestra el promedio del estudiante seleccionado', promedioEst)
    .command('promedioEstGanado', 'Promedio de los estudiantes por encima de 3')
    .argv

module.exports = {
    argv
}