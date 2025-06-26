import express from 'express';
const app = express();

app.get('/', (req,res)=>{
    res.render('index.ejs',{
        name:'Dhanush',
        age:20,
        phone:8790820213
    });
})

app.listen(3000,()=>{
    console.log("Server is running!!")
});