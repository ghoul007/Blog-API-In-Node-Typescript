import * as mongoose from 'mongoose';
import * as joi from 'joi';

const postSchema = new mongoose.Schema({
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
    categoryID:[{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }],
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export function validate(post) {
    const schema = {
        date: joi.date(),
        title: joi.string().required(),
        content: joi.string().required(),
        categoryID: joi.objectid().required()
    }

    return joi.validate(post, schema)
}

export default mongoose.model('Post', postSchema)