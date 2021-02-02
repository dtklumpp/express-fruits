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
        ? console.log('err:', err) //; //console.log('unworky');
        : res.redirect('/fruits'); console.log('worky'); //Express request 
    })
    //oh i see, this arrow fxn thing doesn't work...
    //just just need an IF if wanna run more than one thing



    // console.log('FRUITS:', fruits);
    // redirect is a GET request
    //res.redirect('/fruits');
})


// show route
router.get('/:fruitIndex', (req, res) => {
    // By default, Express will look inside the views
    // directory for the specified file when .render()
    // is called

    db.Fruit.findById(req.params.fruitIndex, (err, data) => {
        err ? console.log('err:', err) : res.render('show.ejs', {
            oneFruit: data
        });
    })
})




// index route
// Expresse route
router.get('/', (req, res) => {
    console.log('got to index route')
    //new mongoose query
    db.Fruit.find(
        {}, (err, data) => {
            console.log('got inside here')
            err ? console.log('err:', err) : res.render('index.ejs', { //Express response
                    allFruits: data
                });
        }
    )
})




//delete route
router.delete('/:fruitIndex', (req, res) => {
    //fruits.splice(req.params.fruitIndex, 1);
    db.Fruit.findByIdAndDelete(req.params.fruitIndex, (err, data) => {
        err
        ? console.log('err:', err)
        : res.redirect('/fruits');
    })

    //res.redirect('/fruits');
});




// edit route
router.get('/:fruitIndex/editForm', (req, res) => {

    db.Fruit.findById(req.params.fruitIndex, (err, data) => {
        err
        ? console.log('err:', err)
        : res.render('edit.ejs', {
            oneFruit: data,
            index: req.params.fruitIndex
        });

    })




});


//update route
router.put('/:fruitIndex', (req, res)=>{
    let index1 = req.params.fruitIndex;
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else{
        req.body.readyToEat = false;
    }

    db.Fruit.findByIdAndUpdate(index1, req.body, {new: true}, (err, data) => {
        err
        ? console.log('err:', err)
        : res.redirect('/fruits/'+data._id);
    })

    //let fruit1 = fruits[index1];
    //fruit1.name = req.body.name;
    //fruit1.color = req.body.color;
});
