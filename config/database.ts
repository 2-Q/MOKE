require('dotenv').config();

const _knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_PRESENCE
    },
    pool: { min: 0, max: 3 } //Menggunakan fungsi pool agar menjaga koneksi ke DB tetep tersambung
});

module.exports = _knex;