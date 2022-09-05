// Update with your config settings.
// import * as dotenv from 'dotenv'
// dotenv.config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1', //process.env.DB_HOST
      user: 'root', //process.env.DB_USERNAME
      password: '', //process.env.DB_PASSWORD
      database: 'my_db', //process.env.DB_DATABASE_PRESENCE
    },
    pool: { min: 0, max: 3 }, //Menggunakan fungsi pool agar menjaga koneksi ke DB tetep tersambung
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
