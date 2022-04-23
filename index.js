const express = require('express')
const loginRouter = require('./routes/login')

const app = express()

require('./database')

const PORT = 3001

app.use('/auth/local/login', loginRouter)


const server = app.listen(PORT, ()=>{
  console.log(`El servidor esta escuchando en el puesto ${PORT}`)
})