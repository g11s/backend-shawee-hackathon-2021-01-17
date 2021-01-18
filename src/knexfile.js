const environments = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'shawee_mysql',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'challenger_shawee',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
  },
  production: {
    client: 'mysql2',
    connection: {
      host: 'shawee_mysql',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'challenger_shawee_prod',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations',
    },
  },
};

export default environments;
