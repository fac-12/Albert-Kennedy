const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const queries = require('./queries');


exports.addAppt = (req, res) => {

	const { headers, scheduledAppt } = req.body;

	const userId = (jwt.decode(headers.authorization, process.env.SECRET)).sub;
	const chatString = bcrypt.genSaltSync().slice(0,6);

	const newApptObj = {
		user_id: userId, 
		mentor: scheduledAppt.mentor,
		date_and_time: scheduledAppt.date_and_time.datetime,
		topics: Object.keys(scheduledAppt.topics),
		chat_string: chatString
	} 
	console.log("in addAppt, here's the newApptObj", newApptObj);
	
	queries
	.addAppointment(newApptObj)
	.then(res => console.log("I added"))
	.catch(err => console.log("error", err));
}
