const express = require('express');
const server = express();
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
const authRouter = require('./routers/auth')
const categoryRouter = require('./routers/category')
const config = require('config')
const winston = require('winston');

process.on('unhandledRejection', (err) => {
    console.log('fff')
    winston.error('fff')
    process.exit(1)
    throw err
})

process.on('uncaughtException', (ex) => {
    winston.error("ex.message, ex");
    process.exit(1)
})

winston.add(winston.transports.File, { filename: "logfile.log" })
winston.handleExceptions(
    new winston.transports.File({ filename: 'exception.log' })
)
server.use(express.json())

mongoose.connect(config.get('db'), { useNewUrlParser: true }).then(
    () => {
        winston.info('connect to mongodb with success')
    }
)

server.use('/api/category', categoryRouter)
server.use('/api/user', authRouter)


server.use('/', (req, res, next) => {
    res.send('hello  world')
})

// throw new Error('ff')
// handler error
server.use((err, req, res, next) => {
    res.send(err)
})





server.listen(port, () => console.log(`server running at port ${port}`))
