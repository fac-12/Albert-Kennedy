const airtable = require('../airtable/airtable_helpers');

exports.profileAppointments = (req, res) => {
  airtable
    .getUserAppointments(req.user.id)
    .then(airtable.addMentorDetailsToAppointments)
    .then(appointments => {
      res.send(JSON.stringify(appointments));
    })
    .catch(err => console.log('error', err));
};
