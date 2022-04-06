const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const pollController = require('./pollController')


const app = express()


app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/create', pollController.createPollGetController)
app.post('/create', pollController.createPollPostController)

app.get('/polls/:id', pollController.viewPollGetController)
app.post('/polls/:id', pollController.viewPollPostController)
app.get('/polls', pollController.getAllPolls)

app.get('/', (req, res) => {
  const title = 'Home | Oops , There Is Nothing To Show'
  res.render('home', { title })
});






mongoose.connect('mongodb://localhost:27017/poll-creation')
  .then(() => {
    app.listen(4000, () => {
      console.log('Application is ready to server on PORT 4000');
    });
  })
  .catch(error => {
    console.log(error);
  })




