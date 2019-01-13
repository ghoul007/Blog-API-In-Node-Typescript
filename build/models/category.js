"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var unique = require("mongoose-unique-validator");
var joi = require("joi");
var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});
categorySchema.plugin(unique);
var validate = function (category) {
    var schema = {
        name: joi.string().required()
    };
    return joi.validate(category, schema);
};
exports.default = mongoose.model('Category', categorySchema);
// module.exports.validate = validate
//# sourceMappingURL=category.js.map