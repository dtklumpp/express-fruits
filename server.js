const express = require('express');
const app = express();
const PORT = 3000;
// return whatever is exported from the file
const fruits = require('./models/fruit_model.js');

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
    res.send(fruits);
})


app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})