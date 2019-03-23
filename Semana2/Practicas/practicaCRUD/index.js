const { argv } = require('./yargs');
const funciones = require('./funciones');
/*
console.log(argv);
console.log('Posicion 0 ' + argv._[0]);
*/
let comando = argv._[0]

switch (comando) {
    case 'crear':
        funciones.crear(argv);
    break

    case 'mostrar':
        funciones.mostrar();
    break

    case 'mostrarest':
        funciones.mostrarest(argv.nombre);
    break

    case 'mostrarMat':
        funciones.mostrarMat();
    break

    case 'promedioEst':
        funciones.promedioEst(argv.nombre);
    break

    case 'promedioEstGanado':
        funciones.promedioEstGanado();
    break

    case 'actualizar':
        funciones.actualizar(argv.nombre, argv.asignatura, argv.calificacion)
    break

    default:
    console.log('No ingreso un comando exitente');
    
}

/*
if(argv._[0] == 'crear'){
    funciones.crear(argv);
}
*/