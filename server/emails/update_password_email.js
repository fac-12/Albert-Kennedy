
const userEmailTemplate = user => {
    return `<p> Hi there ${user.name}, </p>
    <p>You've requested to change your password.</p>
    <p>To do so, please follow this link: ${user.passwordLink}. Your token will expire in 24 hours.</p>
    <p>Best Wishes,</p>
    <p>The Albert Kennedy Trust</p>
    `;
  };


module.exports = { userEmailTemplate }
