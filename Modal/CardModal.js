import mongoose from "mongoose";
const cardSchema=new mongoose.Schema({
    cardImage:{
        type:String,
        required:true
    },
    cardTitle:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})
const Card=mongoose.model("card",cardSchema)
export default Card;