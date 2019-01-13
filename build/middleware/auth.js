"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var config = require("config");
exports.default = (function (req, res, next) {
    // const token = req.header('x-auth-token');
    var token = req.header('Authorization');
    if (!token)
        res.status(401).send('forbidden error');
    try {
        var decoded = jwt.verify(token.split(' ')[1], config.get('secretJWT'));
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(400).send('invalid token');
    }
});
//# sourceMappingURL=auth.js.map