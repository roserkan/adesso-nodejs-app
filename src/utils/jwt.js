const jwt = require("jsonwebtoken");

async function generateJwtToken(id, emailAddress, claims) {
  const token = await jwt.sign(
    { id, emailAddress, claims },
    process.env.SECRET_KEY,
    { expiresIn: process.env.EXPIRES_IN }
  );
  return token;
}

async function verifyJwtToken(token) {
  try {
    const result = await jwt.verify(token, process.env.SECRET_KEY);
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  generateJwtToken,
  verifyJwtToken,
};
