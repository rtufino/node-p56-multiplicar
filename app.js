var colors = require('colors/safe');

const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(mensaje => console.log(colors.blue(mensaje)))
            .catch(err => console.log(colors.red(err)));
        break;
    default:
        console.log('comando no válido!');
}