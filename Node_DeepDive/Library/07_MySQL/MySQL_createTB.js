// mysql 모듈
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comicbook',
    port: '3306',
});

connection.connect();

connection.query('create table books (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, genre VARCHAR(20) NOT NULL, releasedate date NOT NULL);', (error, results, fields)=>{
    if (error) throw error;
    console.log(results);
});

connection.query('describe books', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
})

connection.end();