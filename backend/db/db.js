const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected successfully...")
    } catch (error) {
        console.log('DB connection error')
        console.log(error);
    }
}

module.exports = {db};