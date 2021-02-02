const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const PORT = 3000;

const db = require('./models');

const fruitsController = require('./controllers/fruits_controller');

// middleware
// takes POST and PUT requests and adds form data to request object
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
})

app.use('/fruits', fruitsController);

app.get('/', (req, res) =>{
    res.send('ahoy there');
})

app.listen(PORT, () => {
    console.log(`Listening for client requests on port ${PORT}`);
})
