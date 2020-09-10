const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
// return whatever is exported from the file
const fruits = require('./models/fruit_model.js');

// middleware
// takes POST and PUT requests and adds form data to request object
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
})


// new route
app.get('/fruits/newForm', (req, res) => {
    res.render('new.ejs');
})

// create route
app.post('/fruits', (req, res) => {
    // console.log('REQ.BODY:', req.body);
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    // console.log('FRUITS:', fruits);
    // redirect is a GET request
    res.redirect('/fruits');
})

// show route
app.get('/fruits/:fruitIndex', (req, res) => {
    // By default, Express will look inside the views
    // directory for the specified file when .render()
    // is called
    res.render('show.ejs', {
        oneFruit: fruits[req.params.fruitIndex]
    });
})

// index route
app.get('/fruits', (req, res) => {
    res.render('index.ejs', {
        allFruits: fruits
    })
})


app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})