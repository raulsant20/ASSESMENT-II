const login = (req, res) => {
  const { email, password } = req.body
  //funcion que busca email & password
  res.status(200).json({"message": "email and password corret"})
  //funcion que crea token
}

module.exports = login