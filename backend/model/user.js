import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {type:String,required:true},
    age: Number
})
const User=mongoose.model('Users', UserSchema)

export default User;