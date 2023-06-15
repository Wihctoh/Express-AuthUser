const { Pool } = require('pg');

const pool = new Pool({
  port: 5432,
  user: 'postgres',
  host: 'localhost',
  password: '12345678',
  database: 'contacts',
});

module.exports = pool;
