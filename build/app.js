"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var auth_1 = require("./routers/auth");
var category_1 = require("./routers/category");
var config = require("config");
var winston = require("winston");
var server = express();
var port = process.env.PORT || 3000;
process.on('unhandledRejection', function (err) {
    console.log('fff');
    winston.error('fff');
    process.exit(1);
    throw err;
});
process.on('uncaughtException', function (ex) {
    winston.error("ex.message, ex");
    process.exit(1);
});
winston.add(winston.transports.File, { filename: "logfile.log" });
winston.handleExceptions(new winston.transports.File({ filename: 'exception.log' }));
server.use(express.json());
mongoose.connect(config.get('db')).then(function () {
    winston.info('connect to mongodb with success');
});
server.use('/api/category', category_1.default);
server.use('/api/user', auth_1.default);
server.use('/', function (req, res, next) {
    res.send('hello  world');
});
// throw new Error('ff')
// handler error
server.use(function (err, req, res, next) {
    res.send(err);
});
server.listen(port, function () { return console.log("server running at port " + port); });
//# sourceMappingURL=app.js.map