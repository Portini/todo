const express = require('express');
const app = express();
const port = 3000;

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