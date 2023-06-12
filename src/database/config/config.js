require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database:  process.env.DB_DATABASE,
    host:  process.env.DB_HOST,
    dialect: "mysql",
    port :  process.env.DB_PORT
  },
  test: {
    username: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    host: process.env.MYSQL_ADDON_HOST,
    port : process.env.MYSQL_ADDON_PORT,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};