const { Pool } = require('pg');

const pool = new Pool({
  port: process.env.PORT_DB,
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PWD,
  database: process.env.DB,
});

module.exports = pool;
