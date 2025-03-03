const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const UserModel=require("./schema")
const app=express()
app.use(express.json())
const port=process.env.port || 5000

const mongoUrl='mongodb+srv://sushmithaengr23:1yHICAM9AI7B5fD7@cluster0.pybyb.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoUrl)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})


app.post("/user",async(req,res)=>{
    try {
        const {name,location,rating,cuisine}=req.body
        if(!name){
            res.status(400).json("successfully connected")
        }
        let user=new UserModel({name,location,rating,cuisine})
        await user.save()
        res.status(201).json("created")
    } catch (error) {
        console.log(error)
        res.status(500).json("something went wrong")
    } 
})
app.get("/user",async(req,res)=>{
    try {
        let user=await UserModel.find()
        res.status(500).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json("internal server error")
    } 
})
app.get("/user/:id", async(req,res)=>{
    try {
        let user=await UserModel.findById()
        res.status(500).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json("internal server error")
    } 
})




app.delete("/user/:id",async(req,res)=>{
    try {
        let id =req.params.id
        let user=await UserModel.findByIdDelete(id)
        if(!user){
            return res.status(500).json({message:"invalid id"})
        }
        res.status(500).json({message:"deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).json("internal server error")
    } 
})
app.listen(port,()=>{
    console.log(`server is running in http://localhost:${5000}`)
})


