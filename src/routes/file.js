const router = require('express').Router()
const fs = require('fs')
const path = require('path')
const PATH = path.join(__dirname, '../../file.log')

router.get('/append', (req, res) => {
  const { txt } = req.query  

  if (!txt) {
    res.sendStatus(400)
    return
  }

  fs.promises.appendFile(PATH, `${txt}\n`, 'utf8')
  res.sendStatus(200)
})

router.get('/append-bloq', (req, res) => {
  const { txt } = req.query  

  if (!txt) {
    res.sendStatus(400)
    return
  }


  fs.appendFileSync(PATH, `${txt}\n`, 'utf8')
  
  res.sendStatus(200)
})

module.exports = router