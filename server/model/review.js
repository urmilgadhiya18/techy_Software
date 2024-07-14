const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required:true},
    title:{type: String, required:true},
    rating:{type: Number, required:true},
    review:{type: String, required:true},
    reviewed:{type:Date, default:Date.now}
})

const review=mongoose.model("reviewModel",userSchema)
module.exports=review