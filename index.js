const express = require('express')
const loginRouter = require('./routes/login')
const userRouter = require('./routes/user')
const favsRouter = require('./routes/favs')

const app = express()

require('./database')

app.use(express.json())

const PORT = 3001

app.use('/auth/local/login', loginRouter)
app.use('/api/users', userRouter)
app.use('/api/favs', favsRouter)

const server = app.listen(PORT, ()=>{
  console.log(`El servidor esta escuchando en el puesto ${PORT}`)
})