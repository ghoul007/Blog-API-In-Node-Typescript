"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var joi = require("joi");
var postSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    title: {
        type: String,
        default: '',
        required: true
    },
    content: {
        type: String,
        default: '',
        required: true
    },
    categoryID: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Category'
        }],
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
function validate(post) {
    var schema = {
        date: joi.date(),
        title: joi.string().required(),
        content: joi.string().required(),
        categoryID: joi.objectid().required()
    };
    return joi.validate(post, schema);
}
exports.validate = validate;
exports.default = mongoose.model('Post', postSchema);
//# sourceMappingURL=post.js.map