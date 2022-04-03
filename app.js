const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')


const app = express()


app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/create', (req, res) => {
  res.render('create')
})

app.get('/', (req, res) => {
  res.render('home')
});






mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    app.listen(4000, () => {
      console.log('Application is ready to server on PORT 4000');
    });
  })
  .catch(error => {
    console.log(error);
  })




