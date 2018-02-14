const jwt = require("jwt-simple");
const crypto = require("crypto");
const queries = require("./queries");
const {
	mentorConfirmationEmail,
	userConfirmationEmail,
	aktConfirmationEmail
} = require("../emails");

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
		topics: Object.keys(scheduledAppt.topics),
		chat_string: chatString
	};

	queries
		.addAppointment(newApptObj)
		.then(() => {
			queries
				.getEmailDetails(newApptObj.mentor, userId)
				.then(res => {
					mentorConfirmationEmail(
						res[0].mentor_email,
						res[0].user_name,
						newApptObj.date_and_time,
						newApptObj.chat_string
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
				})
				.catch(err => console.log(err));
		})
		.catch(err => console.log("error", err));
};
