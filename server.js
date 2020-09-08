const express = require('express');
const app = express();
const PORT = 3000;

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/awesome', (req, res) => {
    res.send('<h1>Fruits are awesome</h1>');
})

app.get('/fruits/:fruitIndex', (req, res) => {
    console.log('hit:', req.params.fruitIndex)
    res.send(fruits[req.params.fruitIndex]);
})

app.get('/greetings', (req, res) => {
    res.send(`Hello, ${req.query.firstName} ${req.query.lastName}`);
})

app.get('/add', (req, res) => {
    const sum = parseInt(req.query.x) + parseInt(req.query.y);
    res.send(`${req.query.x} + ${req.query.y} = ${sum}`);
})


app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})