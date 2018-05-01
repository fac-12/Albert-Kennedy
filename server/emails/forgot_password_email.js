
const userEmailTemplate = user => {
    return `<p> Hi there ${user.name}, </p>
    <p>You've requested to change your password.</p>
    <p>Please follow this link: ${user.passwordLink}</p>
    `;
  };


module.exports = { userEmailTemplate }