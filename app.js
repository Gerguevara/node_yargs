//requires
const {createFile, list} = require('./multiply/multiply.js')
const argv = require('yargs')
//declaring commands list and create
.command('list', 'make a console print of  a mulply table', {
    base: {
      demand: true,
      alias: 'b'
    },

    limit: {
      alias: 'l',
      default: 10
    }
  })
  .command('create', 'Create a file with results', {
      base: {
        demand: true,
        alias: 'c'
      },

      limit: {
        alias: 'l',
        default: 10
      }
    })
  //brings documentation to users
  .help()
  .argv;

// single comands use the next variable
let command = argv._[0]

  switch (command) {
    case 'list':
      list(argv.base, argv.limit);
      break;


    case 'create':
    createFile(argv.base, argv.limit )
    .then(archivo=>console.log(`Archivo creado: ${archivo}`))
    .catch(err=>console.log(err))

      break;

    default:
    console.log('unknow command');
  }
