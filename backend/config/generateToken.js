const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({id},process.send.JWT_SECRET, {
        expiresIn: "30d",
    });
};

module.exports = generateToken;