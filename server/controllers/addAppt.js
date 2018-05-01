const jwt = require("jwt-simple");
const crypto = require("crypto");
const airtable = require("../airtable/airtable_helpers");

const {
  mentorConfirmationEmail,
  userConfirmationEmail,
  aktConfirmationEmail
} = require("../emails/sendConfirmationEmails");

exports.addAppt = (req, res) => {
  const { headers, scheduledAppt } = req.body;

  const userId = jwt.decode(headers.authorization, process.env.SECRET).sub;
  const chatString = crypto
    .randomBytes(Math.ceil(3))
    .toString("hex")
    .slice(0, 6);

  const newApptObj = {
    user_id: userId,
    mentor: scheduledAppt.mentor,
    date_and_time: scheduledAppt.date_and_time,
    topics: Object.keys(scheduledAppt.topics).toString(),
    info: scheduledAppt.topics.info,
    chat_string: chatString
  };

  airtable
    .addAppointment(newApptObj)
    .then(airtable.getEmailDetails)
    .then(([mentorDetails, userDetails]) => {
      const info = {
        content: newApptObj.info
      };
      mentorConfirmationEmail(
        mentorDetails[0],
        userDetails[1],
        newApptObj.date_and_time,
        newApptObj.chat_string,
        newApptObj.topics,
        info
      );
      userConfirmationEmail(
        userDetails[0],
        userDetails[1],
        newApptObj.mentor,
        newApptObj.date_and_time,
        newApptObj.chat_string
      );
      aktConfirmationEmail(
        userDetails[1],
        newApptObj.mentor,
        newApptObj.date_and_time
      );
      return;
    })
    .then(res.send())
    .catch(err => console.log(err));
};
