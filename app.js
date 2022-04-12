const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'us-cdbr-east-05.cleardb.net',
    user : 'b7314608720d5c',
    password : '6d254bae',
    database : 'heroku_a3a7dead617660e'
});

// connection.connect();

// connection.query('select * from list', (error, result) => {
//     if (error) throw error;
//     console.log(result);
// })

// connection.end();

app.get('/', (req, res) => {
    res.send('Hello Wold!');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.get('/todolist', (req, res) => {
    res.sendFile(__dirname + '/todolist.html');
});

var id = 'id1';
var pw = 'pw1';
app.get('/dbtest', (req, res) => {
    connection.query(`select title from list where id='${id}'`, (error, result) => {
        if (error) throw error;
        for(let i = 0; i < Object.keys(result).length; i++){
            console.log(i+1, result[i].title);
            // res.send(i+1, result[i].title);
        }
        res.send(result);
    });
});

app.get('/logintest', (req, res) => {
    connection.query(`select pw from user where id = '${id}'`, (error, result) => {
        if (error) throw error;
        if (pw == result[0].pw){
            console.log('로그인 성공');
            res.send('로그인 성공');
        }else{
            console.log('로그인 실패');
            res.send('로그인 실패');
        }
    });
});
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});