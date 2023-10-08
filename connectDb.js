const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

const conectDB = () => {
    return mongoose.connect(uri , 
        console.log("DB connected successfully")
    );
}

module.exports = conectDB;