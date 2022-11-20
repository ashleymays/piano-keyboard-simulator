const mysql = require('mysql2');
const credentials = require('./credentials');

const connection = mysql.createConnection(credentials);

module.exports = connection;