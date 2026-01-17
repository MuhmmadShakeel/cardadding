import mongoose from "mongoose";
const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    }
})
const Comment=mongoose.Model("comment",commentSchema)
export default Comment;