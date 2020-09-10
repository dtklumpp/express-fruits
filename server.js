const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const fruitsController = require('./controllers/fruits_controllers');

// middleware
// takes POST and PUT requests and adds form data to request object
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
})

app.use('/fruits', fruitsController);



app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})