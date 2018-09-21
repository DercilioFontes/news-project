// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'news'
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    searchPath: ['knex', 'public'],
  }
};
