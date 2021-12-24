const argv = require('yargs')
              .options({
                'b': {
                  alias: 'base',
                  type: 'number',
                  demandOption: true,
                  describe: 'Es la base de la tabla de multiplicar'
                },
                'l': {
                  alias: 'listar',
                  default: false,
                  type: 'boolean',
                  describe: 'Muestra la tabla en consola'
                },
                'h': {
                  alias: 'hasta',
                  default: 10,
                  type: 'number',
                  describe: 'Es el limite de la tabla a multiplicar',
                }
              })
              .check( ( argv, options ) => {
                console.log('yargs:', argv);
                if ( isNaN(argv.b) ) {
                  throw 'La base tiene que ser un número'
                }
                return true;
              })
              .argv;

module.exports = argv;