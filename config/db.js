const mysql = require('mysql2');

const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'musicplayer'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to Mysql Database');
})

module.exports = db;