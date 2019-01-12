const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator')
const joi = require("joi")


const userScheme = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
})

userScheme.plugin(unique)

const validate = (user) => {
    const schema = {
        email: joi.string().required(),
        password: joi.string().required()
    }

    return joi.validate(user, schema)
}

module.exports.User = mongoose.model('User', userScheme)
module.exports.validate = validate