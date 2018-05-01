const airtable = require('../airtable/airtable_helpers');
const jwt = require('jwt-simple')

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
  const { headers, chat_string } = req.body;
  const userId = jwt.decode(headers.authorization, process.env.SECRET).sub;


  airtable
    .getApptRecordId(chat_string)
    .then(async id => {
      return await airtable.deleteAppointment(id)
    })
    .then(async userId => {
      return await airtable
      .getUserAppointments(userId)
      .then(airtable.addMentorDetailsToAppointments)
      .then(appointments => {
        res.send(JSON.stringify(appointments));
        })
      .catch(console.log)
  })
}