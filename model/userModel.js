const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "name must be provided"]
    },
    emailId:{
        type:String,
        required:[true , "Email must be provided"]
    },
    profilePic:{
        type:String
    },
    admin:{
        type:Boolean,
        default:false
    },
    userType:{
        type:Number,
        default:2
    },
})

const User = mongoose.model("user", userSchema);
module.exports = User