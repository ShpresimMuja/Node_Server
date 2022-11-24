
const knex = require('knex')
const config = require('./knexfile.js');


const ConnectKnex = knex(config.development)
  


module.exports = ConnectKnex

