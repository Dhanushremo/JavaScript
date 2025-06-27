import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())

app.listen(3000,()=>{
    console.log("Server started Sucessfully")
})


let hospitals = [
  { id: 1, name: "Apollo", city: "Hyderabad" },
  { id: 2, name: "Yashoda", city: "Bangalore" }
]

app.get('/get',(req,res)=>{
    res.status(200).json(hospitals);
})

app.post('/add',(req,res)=>{
    try{
    const {name,city} =req.body;
    const newHosipital = {id:hospitals.length+1,name,city} ;
    hospitals.push(newHosipital);
    return res.status(201).json(newHosipital)
    }catch(err){
        return res.status(500).json({'Error':err})
    }
    
})