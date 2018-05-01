const mentorEmailTemplate = appt => {
  return `<p> Hi there, </p>
	<p>${appt.userName} has cancelled your appointment on ${appt.date}.</p>
</ol>
  `
};

const userEmailTemplate = appt => {
  return `<p> Hi there ${appt.userName}, </p>
  <p>This email is confirmation that your appointment with ${appt.mentorName} at ${appt.date} has been cancelled.</p>
  `;
};


module.exports = { mentorEmailTemplate, userEmailTemplate };
