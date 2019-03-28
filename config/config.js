module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'todolist_dev',
    host: 'localhost',
    dialect: 'mysql',
    // dialectOptions: {
    //   socketPath: '/srv/run/mysqld/mysqld.sock'
    // },
    secret: 'secret',
    operatorsAliases: false
  },
  test: {
    username: 'root',
    password: '',
    database: 'todolist_test',
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      socketPath: '/srv/run/mysqld/mysqld.sock'
    },
    secret: 'secret',
    operatorsAliases: false
  },
  production: {
    username: 'root',
    password: '',
    database: 'todolist_prod',
    host: 'localhost',
    dialect: 'mysql',
    // dialectOptions: {
    //   socketPath: '/srv/run/mysqld/mysqld.sock'
    // },
    secret: 'secret',
    operatorsAliases: false
  }
};
