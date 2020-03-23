const express = require('express')
const logger = require('morgan')
const usersRouter = require('./routes/users')
const gramsRouter = require('./routes/grams')

const app = express();

app.use(logger('dev'))

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/users', usersRouter)
app.use('/grams', gramsRouter)

app.get('/', (req, res) => {
  res.render('welcome')
})


const PORT = 3001
const DOMAIN = 'localhost'

app.listen(PORT, DOMAIN, () => {
  console.log(`Listening on ${DOMAIN}:${PORT}`)
})