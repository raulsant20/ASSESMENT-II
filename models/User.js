const mongoose = require('mongoose')

const schema = {
  'email': {
    type: String,
    required: true
  },
  'password': {
    type: String,
    required: true
  },
  'favsId': [{
    type: String
  }]
}

const userSchema = mongoose.Schema(schema)

const User = mongoose.model('User', userSchema)