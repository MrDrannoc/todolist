module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'todolist_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      socketPath: '/srv/run/mysqld/mysqld.sock'
    },
    secret: 'secret',
    operatorsAliases: false
  },
  test: {
    username: 'root',
    password: '',
    database: 'todolist_test',
    host: '127.0.0.1',
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
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
      socketPath: '/srv/run/mysqld/mysqld.sock'
    },
    secret: 'secret',
    operatorsAliases: false
  }
};
