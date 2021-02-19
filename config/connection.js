const mysql = require('mysql');


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.send.JAWSDB_URL);
} else {
const connection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'root',
password: '#Nachos11',
database: 'burgers_db',
});
};

connection.connect((err) => {
    if (err) { 
        console.error(`Line 13 connection.js. error connecting: ${err.stack}`);
        return;
    }       
    console.log( `Line 16 connection.js: connected as id ${connection.threadId}`);
});

module.exports = connection;