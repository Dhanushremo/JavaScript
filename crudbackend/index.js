import express from 'express'
import cors from 'cors'
import mysql from 'mysql2'

const app=express()
app.use(cors())
app.use(express.json())


app.listen(3000,()=> console.log("Running Sucessfully!"));


app.get("/",(req,res)=>{
    res.json("Dhasu")
})

