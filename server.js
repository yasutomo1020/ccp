
const http = require('http');
const express = require('express');

const mysql = require('mysql');

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

const sql = 'select * from ccptb';
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
/*
// �T�[�o�@�\�̏�����
var server = http.createServer();
var fs = require('fs');
// ���N�G�X�g�̏���
server.on('request', (req, res) => {
    if (req.url == '/') {
        filepath = '/index.html';
    } else {
        filepath = req.url;
    }
    var fullpath = __dirname + '/html/' + filepath;
    fs.readFile(fullpath, 'UTF-8',
        (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>404 not found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);

            }
            res.end();
        }
    );
});
// �w�肵��IP�A�h���X�A�|�[�g�ԍ��ŃT�[�o�𗧂Ă�
server.listen(80);
*/

const app = express();
app.set("view engine", "ejs");
const port = 80;
app.use(express.static('./html/', { fallthrough: true }));
app.listen(port, () => {
    console.log('Server started on port:' + port);
});
app.get('/view', function (req, res){
    connection.query(sql, function (err, results, fields) {
        res.send(results);
    });
});
app.get('/view.ejs', function (req, res) {
  
        var data = {
            items: "��������������������"
        };
   res.render('view', data);
});


