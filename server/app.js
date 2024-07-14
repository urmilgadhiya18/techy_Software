const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const review=require('./model/review')
const user=require('./model/user')
require('dotenv').config();

const app=express()
app.use(express.json())
app.use(cors())

const mongo_uri=process.env.MONGO_URI;
mongoose.connect(mongo_uri)

app.post('/signup',(req,res)=>{
    const {email}=req.body;
    user.findOne({email: email})
    .then(data=>{
        if(data && data.email===email){
            res.json("The user alredy exists.")
        }
        else{
            user.create(req.body)
            .then(user=>res.json(user))
            .catch(err=>res.json(err))
        }
    })
})

app.post('/signin',(req,res)=>{
    const {email,password}=req.body
    user.findOne({email: email})
    .then(data=>{
        if(data){
            if(data.password===password){
                res.json(data.name)
            }else{
                res.json('Wrong password')
            }
        }
        else{
            res.json("Invalid email or password")
        }
    })
})

app.get('/review',(req,res)=>{
    review.find()
    .then(data=>{
        res.json(data)
    })
})
app.post('/review',(req,res)=>{
    review.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
})

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is running from port ${port}`);
})