const { userEmailTemplate } = require('./forgot_password_email');
const { transporterFunction } = require('./helpers');

const userUpdatePasswordEmail = user => {
  const userEmail = {
    from: 'hellointerakt@gmail.com',
    to: `${user.email}`,
    subject: 'AKT online mentoring appointment confirmed',
    html: userEmailTemplate(user)
  };

  transporterFunction(userEmail);
};

module.exports = { userUpdatePasswordEmail };
