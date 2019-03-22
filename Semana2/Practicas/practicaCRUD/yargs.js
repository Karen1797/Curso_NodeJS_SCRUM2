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

const mostrarest = {
    nombre
}

const creacion = {
    nombre,
    matematicas,
    ingles,
    programacion
}

const argv = require('yargs')
    .command('crear', 'Crear un estudiante', creacion)
    .command('mostrar', 'Muestra los estudiantes y sus notas')
    .command('mostrarest', 'Muestra el estudiante con el nombre ingresado',mostrarest)
    .argv

module.exports = {
    argv
}