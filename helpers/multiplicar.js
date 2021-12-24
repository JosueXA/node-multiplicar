const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

  try {
  
    let salida, consola = '';
  
    for (let i = 1; i <= hasta ; i++) {
      salida += `${ base } x ${ i } = ${ base * i }\n`;
      consola += `${ colors.brightBlue(base) } ${ colors.yellow('x') } ${ colors.green(i) } ${ colors.yellow('=') } ${ base * i }\n`;
    }

    if (listar) {
      console.log('========================='.yellow);
      console.log('    Tabla del:', colors.brightBlue(base));
      console.log('========================='.yellow);
    
      console.log(consola);
    }
  
    fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
  
    return `tabla-${ base }.txt`;
  } catch (err) {
    throw err;
  }

};

module.exports = {
  crearArchivo
}