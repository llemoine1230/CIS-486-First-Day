import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World Express')
})

app.listen(3000)
