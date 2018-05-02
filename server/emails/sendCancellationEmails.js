const {
  userEmailTemplate,
  mentorEmailTemplate
} = require('./cancellation_emails');
const { transporterFunction } = require('./helpers');

const mentorCancellationEmail = appt => {
  const mentorEmail = {
    from: 'hellointerakt@gmail.com',
    to: `${appt.emailAddress}`,
    subject: 'Cancelled AKT online mentoring appointment',
    html: mentorEmailTemplate(appt)
  };

  transporterFunction(mentorEmail);
};

const userCancellationEmail = appt => {
  const userEmail = {
    from: 'hellointerakt@gmail.com',
    to: `${appt.emailAddress}`,
    subject: 'Cancelled AKT online mentoring appointment',
    html: userEmailTemplate(appt)
  };

  transporterFunction(userEmail);
};

module.exports = {
  mentorCancellationEmail,
  userCancellationEmail
};
