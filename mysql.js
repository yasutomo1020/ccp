// comment
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: '35.227.58.234',
    user: 'yasutomo1020',
    password: 'Yasu-1020',
    database: 'ccp'
});
connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
});

var sql = 'select * from ccptb';
connection.query(sql, function (err, rows, fields) {
    if (err) {
        console.log('can not connect');
        console.log(err);
        return;
    }

    for (var i in rows) {
        console.log(rows[i]);
    }
});
//connection.end();




