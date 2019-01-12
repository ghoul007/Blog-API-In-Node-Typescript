
const { User, validate } = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config =  require('config')

module.exports.login = async (req, res, next) => {
        const { error } = validate({ email: req.body.email, password: req.body.password })
        if (error) return res.status(400).send(error['details'][0]['message']);
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).send('invalid email');
        const validPass = await bcrypt.compare(req.body.password, user.password)
        if (!validPass) return res.status(404).send('invalid password');
        const token = jwt.sign({ userId: user._id }, config.get('secretJWT'))
        console.log("token ", token);
        return res.json({ userId: user._id, token })
}

module.exports.signup = async (req, res, next) => {
        const { error } = validate({ email: req.body.email, password: req.body.password })
        if (error) return res.status(400).send(error['details'][0]['message']);
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            email: req.body.email,
            password: hashPassword,
        })
        const result = await user.save();
        return res.json(user)
}