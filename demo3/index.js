import express from 'express'
import mysql from 'mysql2'
import cros from 'cros'
const app=express();
app.use(cros)
app.use(express.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'2327',
    database:'dhanushdb'
});

db.connect((err)=>{
    if(err){
        console.error('Error While creating database',err);
        return;
    }
    console.log('Connection Sucessed!');
})

app.listen(3000,()=>{
    console.log('Connection Server Sucessed!');
})

app.get('/iteams',(req,res)=>{
    db.query('select * from student', (err,result)=>{
        if(err) return res.status(500).send(err);
        return res.json(result);
    });
});

app.get('/iteams:id',(req,res)=>{
    db.query('select * from student where id=',[id],(err,result)=>{
        if(err) return res.status(500).send(err);
        return res.json(result[0])
    });
});

app.post('/add' ,(req,res)=>{
    const {id,name,age,dept} = req.body;
    db.query('insert into student (id,name,age,dept) values(?,?,?,?)',[id,name,age,dept],(err,result)=>{
        if(err) return res.status(500).send(err);
        res.json({id:result.insertId,name,age,dept})
    })
})

app.put('/update:id',(req,res)=>{
    const {id} =req.params;
    const {name,age,dept} = req.body;
    db.query('update student set name=?,age=?,dept=? where id=?',[name,age,dept,id],(err,result)=>{
        if(err) return res.status(500).send(err)\
        return res.json({id,name,age,dept})
    })
})

app.delete('/delete:id',(req,res)=>{
    const {id}= req.params;
    db.query('delete student where id=?',[id],(err,result)=>{
        if(err) return res.status(500),send(err)
        return res.json({ message : 'Student Deleted with id ${id}'})
    })
})