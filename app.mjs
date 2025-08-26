import express from 'express'
// import path from 'path';
const app = express()

const PORT = process.env.PORT || 3000;

const path = require('path');

app.use(express.static(__dirname + 'public'));

app.get('/', (req, res) => {
  res.send('Hello Express from Render 😍😍😍. <a href="laura">laura</a>')
})

// endpoints...middlewares...apis?
// send an html file

app.get('/laura', (req, res) => {
  res.send('laura. <a href="/">home</a>')
  res.sendFile('laura.html');
})

app.listen(3000)
//Push #1 testing
// TODO: refactor to use the environment port.
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})