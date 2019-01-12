const jwt = require('jsonwebtoken');
const config =  require('config')
module.exports = (req, res, next) => {
    // const token = req.header('x-auth-token');
    const token = req.header('Authorization');
    if (!token) res.status(401).send('forbidden error')

    try {
        const decoded = jwt.verify(token.split(' ')[1], config.get('secretJWT'));
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('invalid token')
    }

}