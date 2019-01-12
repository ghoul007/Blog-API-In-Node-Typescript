const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const joi = require('joi')
categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

categorySchema.plugin(unique)

const validate = (category) => {

    const schema = {
        name: joi.string().required()
    }

    return joi.validate(category, schema)
}

module.exports.Category = mongoose.model('Category', categorySchema)
module.exports.validate = validate