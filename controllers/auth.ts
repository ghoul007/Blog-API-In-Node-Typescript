
import User  from '../models/user';
import * as  bcrypt from 'bcrypt';
import * as  jwt from 'jsonwebtoken';
import * as config from 'config';

export async function login(req, res, next){
        // const { error } = validate({ email: req.body.email, password: req.body.password })
        // if (error) return res.status(400).send(error['details'][0]['message']);
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).send('invalid email');
        const validPass = await bcrypt.compare(req.body.password, user['password'])
        if (!validPass) return res.status(404).send('invalid password');
        const token = jwt.sign({ userId: user._id }, config.get('secretJWT'))
        console.log("token ", token);
        return res.json({ userId: user._id, token })
}

export async function signup(req, res, next) {
        // const { error } = validate({ email: req.body.email, password: req.body.password })
        // if (error) return res.status(400).send(error['details'][0]['message']);
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
                email: req.body.email,
                password: hashPassword,
        })
        const result = await user.save();
        return res.json(user)
}