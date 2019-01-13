import * as  mongoose from 'mongoose';
import * as unique from 'mongoose-unique-validator';
import * as joi from 'joi';


const userScheme = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
})

userScheme.plugin(unique)

export function validate(user){
    const schema = {
        email: joi.string().required(),
        password: joi.string().required()
    }

    return joi.validate(user, schema)
}

export default mongoose.model('User', userScheme)
 
// module.exports.validate = validate