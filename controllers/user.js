const bcrypt = require('bcrypt')
const User = require('../models/User')

const create = async (req, res) => {
  const { email, password } = req.body
  //function to create users in the database
  const passwordHashed = await bcrypt.hash(password, 10)

  const newUser = new User({
    email,
    password: passwordHashed
  })

  try{
    const savedUser = await newUser.save()
    res.status(201).send({
      'status': 'user created',
      'data': savedUser
    })
  } catch(e){
    console.log(e)
    res.status(500).send({
      'error': e.message
    })
  }

}

module.exports = create
