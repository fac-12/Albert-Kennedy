const { userEmailTemplate, mentorEmailTemplate, aktEmailTemplate } = require('./confirmation_emails')
const { transporterFunction } = require('./helpers')


const mentorConfirmationEmail = appt => {
  const mentorEmail = {
    from: 'hellointerakt@gmail.com',
    to: `${appt.emailAddress}`,
    subject: 'New AKT online mentoring appointment',
    html: mentorEmailTemplate(appt)
  };

  transporterFunction(mentorEmail);
};

const userConfirmationEmail = appt => {
  const userEmail = {
    from: 'hellointerakt@gmail.com',
    to: `${appt.emailAddress}`,
    subject: 'AKT online mentoring appointment confirmed',
    html: userEmailTemplate(appt)
  };

  transporterFunction(userEmail);
};

const aktConfirmationEmail = appt => {
  const aktEmail = {
    from: 'hellointerakt@gmail.com',
    to: 'hellointerakt@gmail.com',
    subject: 'inter-AKT appointment scheduled',
    html: aktEmailTemplate(appt)
  };

  transporterFunction(aktEmail);
};

module.exports = {
  mentorConfirmationEmail,
  userConfirmationEmail,
  aktConfirmationEmail
};
