import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2327',
  database: 'dhanush_db'
})

db.connect(err => {
  if (err) return console.error(err)
  console.log('Connection Succeeded!')
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

app.get('/items', (req, res) => {
  db.query('SELECT * FROM student', (err, result) => {
    if (err) return res.status(500).json({ error: 'DB error' })
    return res.status(200).json(result)
  })
})

app.get('/items/:id', (req, res) => {
  const { id } = req.params
  db.query('SELECT * FROM student WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'DB error' })
    if (result.length === 0) return res.status(404).json({ error: 'Not found' })
    return res.status(200).json(result[0])
  })
})

app.post('/add', (req, res) => {
  const { id, name, age, dpt } = req.body
  if (!id || !name || !age || !dpt) return res.status(400).json({ error: 'Missing fields' })
  db.query(
    'INSERT INTO student (id,name,age,dpt) VALUES(?,?,?,?)',
    [id, name, age, dpt],
    err => {
      if (err) return res.status(500).json({ error: 'DB error' , error : err})
      return res.status(201).json({ id, name, age, dpt })
    }
  )
})

app.put('/update/:id', (req, res) => {
  const { id } = req.params
  const { name, age, dpt } = req.body
  db.query(
    'UPDATE student SET name=?, age=?, dpt=? WHERE id=?',
    [name, age, dpt, id],
    err => {
      if (err) return res.status(500).json({ error: 'DB error' })
      return res.status(200).json({ id, name, age, dpt })
    }
  )
})

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  db.query('DELETE FROM student WHERE id=?', [id], err => {
    if (err) return res.status(500).json({ error: 'DB error' })
    return res.status(200).json({ message: `Student Deleted with id ${id}` })
  })
})
