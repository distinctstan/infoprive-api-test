const express = require('express')
const dbConnection = require('./config/db')

const articleRoutes = require('./routes/articles')
const userRoutes = require('./routes/users')

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res, next) => {
    res.send('Welcome to the api')
})

app.use('/articles', articleRoutes)
app.use('/users', userRoutes)

const port = process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port} at http://localhost:${port}`);
    dbConnection()
})
