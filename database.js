const mongoose = require('mongoose')

const uri = 'mongodb+srv://sportify:sportify@cluster0.s7vxo.mongodb.net/assesment?retryWrites=true&w=majority'

mongoose.connect(uri)
  .then(() => {
    console.log('Database connected')
  })
  .catch((e) => {
    console.log(e)
  })