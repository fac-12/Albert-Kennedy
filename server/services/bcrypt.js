const bcrypt = require("bcrypt-nodejs");

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return reject(err.message);
      bcrypt.hash(password, salt, null, (err, hash) => {
        if (err) return reject(err.message);
        return resolve(hash);
      });
    });
  });
};

const comparePassword = (candidatePassword, user) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) return reject(err.message);
      return resolve({ isMatch, user });
    });
  });
};

module.exports = {
  hashPassword,
  comparePassword
};
