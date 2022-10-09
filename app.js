const express = require('express')
const signUpRouter = require('./routes/signUp')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/signUp', signUpRouter)

app.get('/', (req, res) => {
    res.render('index', { text: 'Hello' })
})

app.listen(5000)