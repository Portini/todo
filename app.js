const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'todo'
})

connection.connect();

connection.query('select * from list', function(error, result) {
    if (error) throw error;
    console.log(result);
})

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

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})