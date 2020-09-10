// base route is /fruits
// all routes in this file represent the balance of the url paths (i.e., everything that follows /fruits)
const express = require('express');
const router = express.Router();
const fruits = require('../models/fruit_model.js');

// new route
router.get('/newForm', (req, res) => {
    res.render('new.ejs');
})

// create route
router.post('/', (req, res) => {
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    // redirect is a GET request
    res.redirect('/fruits');
})

// show route
router.get('/:fruitIndex', (req, res) => {
    // By default, Express will look inside the views
    // directory for the specified file when .render()
    // is called
    res.render('show.ejs', {
        oneFruit: fruits[req.params.fruitIndex]
    });
})

// index route
router.get('/', (req, res) => {
    res.render('index.ejs', {
        allFruits: fruits
    })
})

// delete route
router.delete('/:fruitIndex', (req, res) => {
    fruits.splice(req.params.fruitIndex, 1);
    res.redirect('/fruits');
})

// edit (form) route
router.get('/:fruitIndex/editForm', (req, res) => {
    res.render('edit.ejs', {
        oneFruit: fruits[req.params.fruitIndex],
        index: req.params.fruitIndex
    })
})


module.exports = router;