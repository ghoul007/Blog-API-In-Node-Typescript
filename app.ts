import * as express from 'express';
import * as  mongoose from 'mongoose';
import authRouter from './routers/auth';
import postRouter from './routers/post'
import categoryRouter from './routers/category';
import * as config from 'config';
import * as winston from 'winston';

const server = express();
const port = process.env.PORT || 3000
process.on('unhandledRejection', (err) => {
    console.log(err)
    winston.error(err)
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

mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(config.get('db'),{
  }).then(
    () => {
        winston.info('connect to mongodb with success')
    }
)

server.use('/api/category', categoryRouter)
server.use('/api/user', authRouter)
server.use('/api/post', postRouter)


// server.use('/', (req, res, next) => {
//     res.send('hello  world')
// })

// throw new Error('ff')
// handler error
server.use((err, req, res, next) => {
    res.send(err)
})





server.listen(port, () => console.log(`server running at port ${port}`))
