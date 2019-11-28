//requires
const argv = require('./config/yargs').argv;
const {createFile,list} = require('./multiply/multiply.js')
const color = require('colors');
// single comands use the next variable
let command = argv._[0]

  switch (command) {
    case 'list':
      list(argv.base, argv.limit);
      break;


    case 'create':
    createFile(argv.base, argv.limit )
    .then(archivo=>console.log(`Archivo creado: ${archivo}`.green))
    .catch(err=>console.log(err))

      break;

    default:
    console.log('unknow command');
  }
