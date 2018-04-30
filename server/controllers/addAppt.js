const jwt = require('jwt-simple');
const crypto = require('crypto');
const queries = require('./queries');
const {
  mentorConfirmationEmail,
  userConfirmationEmail,
  aktConfirmationEmail
} = require('../emails');

exports.addAppt = (req, res) => {
  const { headers, scheduledAppt } = req.body;
  const userId = jwt.decode(headers.authorization, process.env.SECRET).sub;
  const chatString = crypto
    .randomBytes(Math.ceil(3))
    .toString('hex')
    .slice(0, 6);

  const newApptObj = {
    user_id: userId,
    mentor: scheduledAppt.mentor,
    date_and_time: scheduledAppt.date_and_time,
    topics: Object.keys(scheduledAppt.topics),
    info: scheduledAppt.topics.info,
    chat_string: chatString
  };

  queries
    .addAppointment(newApptObj)
    .then(() => {
      queries
        .getEmailDetails(newApptObj.mentor, userId)
        .then(res => {
          const info = {
            content: newApptObj.info
          }
          mentorConfirmationEmail(
            res[0].mentor_email,
            res[0].user_name,
            newApptObj.date_and_time,
            newApptObj.chat_string,
            newApptObj.topics,
            info
          );
          userConfirmationEmail(
            res[0].user_email,
            res[0].user_name,
            newApptObj.mentor,
            newApptObj.date_and_time,
            newApptObj.chat_string
          );
          aktConfirmationEmail(
            res[0].user_name,
            newApptObj.mentor,
            newApptObj.date_and_time
          );
          return;
        })
        .then(res.send())
        .catch(err => console.log(err));
    })
    .catch(err => console.log('error', err));
};
