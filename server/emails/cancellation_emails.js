const { convertDate } = require('./helpers');

const mentorEmailTemplate = appt => {
  const newDate = convertDate(appt.date)
  return `<p> Hi there, </p>
	<p>${appt.userName} has cancelled your appointment on ${newDate}.</p>
</ol>
  `
};

const userEmailTemplate = appt => {
  const newDate = convertDate(appt.date)
  return `<p> Hi there ${appt.userName}, </p>
  <p>This email is confirmation that your appointment with ${appt.mentorName} on ${newDate} has been cancelled.</p>
  `;
};


module.exports = { mentorEmailTemplate, userEmailTemplate };
