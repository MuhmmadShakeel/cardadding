import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema=new mongoose.Schema({
fullname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    require:true
},
role:{
    type:String,
    enum:["user","admin"],
    default:"user",
}
},{timestamps:true})


export const hashedPassword=async(password)=>{
  return await bcrypt.hash(password,10)
}

export const comparePassword=async (password,hash)=>{
    return await bcrypt.compare(password,hash)
}

const User=mongoose.model('user',userSchema)
export default User;