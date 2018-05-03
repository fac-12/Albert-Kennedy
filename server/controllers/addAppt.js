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
      mentorConfirmationEmail({
        emailAddress: mentorDetails[0],
        userName: userDetails[1],
        date: newApptObj.date_and_time,
        chatString: newApptObj.chat_string,
        topics: newApptObj.topics,
        info: info
      });
      userConfirmationEmail({
        emailAddress: userDetails[0],
        userName: userDetails[1],
        mentorName: newApptObj.mentor,
        date: newApptObj.date_and_time,
        chat_string: newApptObj.chat_string
      });
      aktConfirmationEmail({
        userName: userDetails[1],
        mentorName: newApptObj.mentor,
        date: newApptObj.date_and_time
      });
      return;
    })
    .then(res.send())
    .catch(err => console.log(err));
};
