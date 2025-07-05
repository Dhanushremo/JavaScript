import express from 'express'
import cors from  'cors'

const app=express();
app.use(cors())
app.use(express.json())

const port=3000
app.listen(port,()=>{
    console.log('Server Started @ ${port}')
})

let demo=[];

app.post('/register',(req,res)=>{
    const { userName, password} = req.body;
    if(!userName?.trim() || !password.trim()){
        return res.status(400).json({error:'UserName and Password Required'})
    }

    const exsit=demo.find(u=>u.userName===userName);
    if(exsit){
        return res.status(409).json({error:"User Already Exist"});
    }

    
  const newUser = { id: demo.length + 1, userName, password };
  demo.push(newUser);
  return res.status(201).json(demo);
});

app.get('/get',(req,res)=>{
    return res.status(200).json(demo);
})

