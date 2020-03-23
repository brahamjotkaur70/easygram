// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'easygram',
      username:'b4u',
      password:'123321'
    },
    migrations: {
      tableName: 'migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
