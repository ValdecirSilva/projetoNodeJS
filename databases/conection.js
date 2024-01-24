const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'usbw',
        database: 'escola'
    }

});
module.exports = knex