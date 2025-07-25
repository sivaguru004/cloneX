import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userName :{
        type : String,
        required : true,
        unique : true
    },
    fullName :{
        type : String,
        required:true
    },
    eMail:{
        type : String,
        required : true,
        unique : true
    }
})