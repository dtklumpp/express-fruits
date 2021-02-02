const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/fruits-db';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

cnxn = mongoose.connection;

cnxn.on('connected', () => {
    console.log('db-dtk connected');
})

cnxn.on('error', (err) => {
    console.log('err-dtk:', err);
})

cnxn.on('disconnected', () => {
    console.log('db-dtk disconnected');
})

module.exports = {
    Fruit: require('./Fruit.js'),
}
