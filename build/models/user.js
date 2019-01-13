"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var unique = require("mongoose-unique-validator");
var joi = require("joi");
var userScheme = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});
userScheme.plugin(unique);
function validate(user) {
    var schema = {
        email: joi.string().required(),
        password: joi.string().required()
    };
    return joi.validate(user, schema);
}
exports.validate = validate;
exports.default = mongoose.model('User', userScheme);
// module.exports.validate = validate
//# sourceMappingURL=user.js.map