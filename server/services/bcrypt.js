const bcrypt = require("bcrypt-nodejs");

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err.message);
      }
      bcrypt.hash(password, salt, null, (err, hash) => {
        if (err) {
          reject(err.message);
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (candidatePassword, user) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) reject(err.message);
      resolve({ isMatch, user });
    });
  });
};

module.exports = {
  hashPassword,
  comparePassword
};
