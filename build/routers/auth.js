"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var auth_1 = require("../controllers/auth");
router.post('/login', auth_1.login);
router.post('/signup', auth_1.signup);
exports.default = router;
//# sourceMappingURL=auth.js.map