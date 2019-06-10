const mongoose = require('mongoose');

const URI = 'mongodb://root:mongoroot1@ds221416.mlab.com:21416/zoocriadero';

mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('BD conectado'))
    .catch(err => console.error(err));

module.exports = mongoose;