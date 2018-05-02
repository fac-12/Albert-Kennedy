const airtable = require('../airtable/airtable_helpers');
const {
  mentorCancellationEmail,
  userCancellationEmail
} = require('../emails/sendCancellationEmails');
const jwt = require('jwt-simple');

exports.profileAppointments = (req, res) => {
  airtable
    .getUserAppointments(req.user.id)
    .then(airtable.addMentorDetailsToAppointments)
    .then(appointments => {
      res.send(JSON.stringify(appointments));
    })
    .catch(err => console.log('error', err));
};

exports.cancelAppointment = (req, res) => {
  const { headers, appt } = req.body;
  const userId = jwt.decode(headers.authorization, process.env.SECRET).sub;

  airtable
    .getApptRecordId(appt.chat_string)
    .then(async id => {
      return await airtable.deleteAppointment(id);
    })
    .then(() => airtable.getUserRecordId(userId))
    .then(async userRecordId => {
      return await airtable.getEmailDetails([appt.mentor_id[0], userRecordId]);
    })
    .then(([mentorDetails, userDetails]) => {
      mentorCancellationEmail({
        emailAddress: mentorDetails[0],
        userName: userDetails[1],
        date: appt.date_and_time
      });
      userCancellationEmail({
        emailAddress: userDetails[0],
        userName: userDetails[1],
        mentorName: appt.mentor_name,
        date: appt.date_and_time
      });
      return;
    })
    .then(async userId => {
      return await airtable
        .getUserAppointments(userId)
        .then(airtable.addMentorDetailsToAppointments)
        .then(appointments => {
          res.send(JSON.stringify(appointments));
        })
        .catch(console.log);
    })
    .catch(console.log);
};
