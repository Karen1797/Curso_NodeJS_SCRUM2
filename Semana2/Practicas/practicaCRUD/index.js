const { argv } = require('./yargs');
const funciones = require('./funciones');
/*
console.log(argv);
console.log('Posicion 0 ' + argv._[0]);
*/
let comando = argv._[0]

if(argv._[0] == 'crear'){
    funciones.crear(argv);
}