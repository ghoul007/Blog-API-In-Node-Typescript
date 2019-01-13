import * as  mongoose from 'mongoose';
import * as unique from 'mongoose-unique-validator';
import * as joi from 'joi';


const categorySchema = new mongoose.Schema({
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

export default mongoose.model('Category', categorySchema)
// module.exports.validate = validate