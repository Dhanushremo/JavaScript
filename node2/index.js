import express from 'express'
import cors from 'cors'

const app=express()
app.use(cors())
app.use(express.json())

app.get('/api/trains', async (req,res)=>{
    try{
        const response = await fetch('https://api.jikan.moe/v4/anime');
        const data=await response.json();
        res.json(data.data)
    }catch(err){
     console.error("Error fetching from Jikan:", err);
    res.status(500).json({ error: "Failed to fetch train data" });
    }
})

app.listen(5000, () => {
  console.log('🚀 Backend running on http://localhost:5000');
});