const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'us-cdbr-east-05.cleardb.net',
    user : 'b7314608720d5c',
    password : '6d254bae',
    database : 'heroku_a3a7dead617660e'
})

// connection.connect();

// connection.query('select * from list', (error, result) => {
//     if (error) throw error;
//     console.log(result);
// })

// connection.end();

app.get('/', (req, res) => {
    res.send('Hello Wold!');
})

app.get('/login', (req, res) => {
    res.send('login page');
})

app.get('/signup', (req, res) => {
    res.send('signup page');
})

app.get('/todolist', (req, res) => {
    res.send('todolis page');
})

var id = 'id1';
var pw = 'pw1';
app.get('/dbtest', (req,res) => {
    connection.query(`select title from list where id='${id}'`, (error, result) => {
        if (error) throw error;
        for(let i = 0; i < Object.keys(result).length; i++){
            console.log(i+1, result[i].title);
            // res.send(i+1, result[i].title);
        }
        res.send(result);
    });
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})