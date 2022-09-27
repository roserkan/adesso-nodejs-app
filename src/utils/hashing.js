const hash = require('object-hash');

function hashing(value) {
    const hashedValue = hash(process.env.PW_START + value + process.env.PW_END);

    return hashedValue;
}

module.exports = hashing;