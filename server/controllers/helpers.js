const crypto = require("crypto");

const generateToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(20, (err, buffer) => {
      if (err) {
        console.log("Error generating random token: ", err);
        return reject(
          "Sorry, there's been a problem on our end! Please try again in a few minutes or contact AKT"
        );
      }
      const token = buffer.toString("hex");
      return resolve(token);
    });
  });
};

const trace = label => x => {
  console.log(label, x);
  return x;
};

module.exports = { generateToken, trace };
