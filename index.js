const express = require('express')

const app = express()

const PORT = 3001

const server = app.listen(PORT, ()=>{
  console.log(`El servidor esta escuchando en el puesto ${PORT}`)
})