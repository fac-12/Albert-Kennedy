const userEmailTemplate = user => {
  return `<p> Hi there ${user.name}, </p>
    <p>To reset your password please click here: ${
      user.passwordLink
    }. This link will expire in 24 hours.</p>
    <p>Thanks</p>
    <p>The Albert Kennedy Trust</p>
    <p>https://www.akt.org.uk/</p>
    `;
};

module.exports = { userEmailTemplate };
