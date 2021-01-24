var mysql = require('mysql');
var db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});
db.connect();
module.exports = db;
//나중에 이 파일 복사해서(db로) 값 넣어서 쓸 것