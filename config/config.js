module.exports = {
  development: {
    username: 'root',
    password: process.env.MYSQL_PWD,
    database: 'todolist_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    secret: 'secret',
    operatorsAliases: false
  },
  test: {
    username: 'root',
    password: process.env.MYSQL_PWD,
    database: 'todolist_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    secret: 'secret',
    operatorsAliases: false
  },
  production: {
    username: 'root',
    password: process.env.MYSQL_PWD,
    database: 'todolist_prod',
    host: '127.0.0.1',
    dialect: 'mysql',
    secret: 'secret',
    operatorsAliases: false
  }
}