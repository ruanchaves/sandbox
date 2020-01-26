let mongoose = require('mongoose')

try {
    await mongoose.connect('mongodb://mongo:27017/test', { useNewUrlParser: true });
} catch (error) {
    console.log(error);
}

module.exports = mongoose