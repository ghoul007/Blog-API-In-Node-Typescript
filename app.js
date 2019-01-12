const express = require('express');
const server = express();
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const authRouter = require('./routers/auth')

server.use(express.json())

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true }).then(
    () => {
        console.log('connect to mongodb with success')
    }
)

server.use('/api/user', authRouter)


server.use('/', (req, res, next) => {
    res.send('hello  world')
})


server.listen(port, () => console.log(`server running at port ${port}`))
