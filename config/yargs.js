//options setup
const options = {
  base: {
    demand: true,
    alias: 'b'
  },

  limit: {
    alias: 'l',
    default: 10
  }
}

//requires
const argv = require('yargs')
  //declaring commands list and create
  .command('list', 'make a console print of  a mulply table', options)
  .command('create', 'Create a file with results', options)
  .help() //brings documentation to users
  .argv;

//exporting
  module.exports={argv}
