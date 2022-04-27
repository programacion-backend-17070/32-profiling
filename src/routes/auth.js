const router = require('express').Router()
const crypto = require('../util/encrypt')
const users = {}

router.get('/users', (req, res) => res.send(users))

router.get('/user', (req, res) => {
  const { username, password } = req.query   

  if (!username || !password) {
    res.status(400).send({
      error: 'credenciales invalidas'
    })
    return
  }
  users[username] = crypto.encrypt(password)

  console.log(users)
  
  res.send("OK")
  
})

module.exports = router