const Knex = require('Knex')({
    client: 'mysql',
    connection: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
    },
    pool: {
        min: 0,
        max: 7
    }
});

module.exports = Knex;