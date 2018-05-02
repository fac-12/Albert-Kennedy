const { convertDate } = require('./helpers');

const mentorEmailTemplate = appt => {
  const newDate = convertDate(appt.date)
  return `<p> Hi there, </p>
  <p>${appt.userName} has cancelled their appointment with you, which was scheduled for ${newDate}.</p>
  <p>They may be in touch again soon to book another appointment, or it may be that they no longer require support from us. Either way, thank you so much for offering your time to support this young person.</p>
  <p>If you have any concerns, please email: onlinesupport@akt.org.uk</p>
  <p>Best wishes,</p>
  <p>The Albert Kennedy Trust</p>
  <p>https://www.akt.org.uk/</p>
  `
};

const userEmailTemplate = appt => {
  const newDate = convertDate(appt.date)
  return `<p> Hi there ${appt.userName}, </p>
  <p>Thank you for letting us know you can no longer make your online mentoring appointment. Your appointment with ${appt.mentorName} on ${newDate} has now been cancelled.</p>
  <p>If you would like to rearrange, simply book another appointment with the mentor of your choosing: http://inter-akt.herokuapp.com/ </p>
  <p>If you would rather talk to AKT directly or your issue is urgent, please email onlinesupport@akt.org.uk or reach out to the AKT office that is closest to you geographically: https://www.akt.org.uk/contact </p>
  <p>Best wishes,</p>
  <p>The Albert Kennedy Trust</p>
  <p>https://www.akt.org.uk/</p>
  `;
};


module.exports = { mentorEmailTemplate, userEmailTemplate };

