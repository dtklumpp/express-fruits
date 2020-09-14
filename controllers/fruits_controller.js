const express = require('express');
const router = express.Router();
module.exports = router;

const db = require('../models');


//base route is /fruits...


// new route
router.get('/newForm', (req, res) => {
    res.render('new.ejs');
})
//don't need comment out for moment
//because not communicate database



// create route
//Express route
router.post('/', (req, res) => {
    // console.log('REQ.BODY:', req.body);
    console.log(req.body);
    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    //fruits.push(req.body);
    //instead:
    //Mongoose query
    db.Fruit.create(req.body, (err, data) => {
        err
        ? console.log('err:', err)
        : () => {
            console.log('data:', data);
            res.redirect('/fruits'); //Express request
        }
    })




    // console.log('FRUITS:', fruits);
    // redirect is a GET request
    //res.redirect('/fruits');
})

/*
// show route
router.get('/:fruitIndex', (req, res) => {
    // By default, Express will look inside the views
    // directory for the specified file when .render()
    // is called
    res.render('show.ejs', {
        oneFruit: fruits[req.params.fruitIndex]
    });
})
*/

// index route
// Expresse route
router.get('/', (req, res) => {

    //new mongoose query
    db.Fruit.find(
        {}, (err, data) => {
            err
            ? console.log('err:', err)
            : () => {
                console.log('data:', data);
                res.render('index.ejs', { //Express response
                    allFruits: data
                });
            }
        }
    )


})


/*
//delete route
router.delete('/:fruitIndex', (req, res) => {
    fruits.splice(req.params.fruitIndex, 1);
    res.redirect('/fruits');
});

// edit route
router.get('/:fruitIndex/editForm', (req, res) => {
    res.render('edit.ejs', {
        oneFruit: fruits[req.params.fruitIndex],
        index: req.params.fruitIndex
    });
});

//update route
router.put('/:fruitIndex', (req, res)=>{
    let index1 = req.params.fruitIndex;
    let fruit1 = fruits[index1];
    fruit1.name = req.body.name;
    fruit1.color = req.body.color;
    if(req.body.readyToEat === 'on'){
        fruit1.readyToEat = true;
    } else{
        fruit1.readyToEat = false;
    }
    res.redirect('/fruits/'+index1);
});
*/
