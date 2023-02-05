const express = require('express')
const api = express()

api.get('/', (req, res) => {
  res.send(`I'm api ${process.env.COLOR}`)
})

api.listen(8080, () => {
  console.log(`I'm api ${process.env.COLOR}`)
})
