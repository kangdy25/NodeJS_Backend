// mysql 모듈 사용
const mysql = require('mysql');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comicbook',
    port: '3306',
});

// 데이터베이스 연결
connection.connect();

// Delete 쿼리문 사용
connection.query('delete from books where number = 2 and writer = \'JI\';', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// Select 쿼리문 사용
connection.query('SELECT * from books', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

// 연결 종료
connection.end();