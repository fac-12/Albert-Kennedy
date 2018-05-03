const { userEmailTemplate } = require("./update_password_email");
const { transporterFunction } = require("./helpers");

const userUpdatePasswordEmail = user => {
  const userEmail = {
    from: "hellointerakt@gmail.com",
    to: `${user.email}`,
    subject: "Change password for AKT online mentoring",
    html: userEmailTemplate(user)
  };

  transporterFunction(userEmail);
};

module.exports = { userUpdatePasswordEmail };
