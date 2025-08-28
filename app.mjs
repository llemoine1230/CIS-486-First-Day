import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const PORT = process.env.PORT || 3000;
//const path = require('path');

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello Express from Render 😍😍😍. <a href="laura">laura</a>')
})

// endpoints...middlewares...apis?
// send an html file

app.get('/laura', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'laura.html'))
})
app.get('/api/laura', (req, res) => {
  // res.send('barry. <a href="/">home</a>')
  const myVar = 'Hello from server!';
  res.json({ myVar });
})
app.listen(3000)
//Push #1 testing
// TODO: refactor to use the environment port.
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})