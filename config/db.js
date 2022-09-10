const mongoose = require('mongoose')
require('dotenv').config()

module.exports = async function mongodbConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Mongodb connected successfully!');
    } catch (error) {
        console.log('Mongodb connection failed...');
    }
}
