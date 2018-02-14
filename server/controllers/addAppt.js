const jwt = require('jwt-simple');
const crypto = require('crypto');
const queries = require('./queries');


exports.addAppt = (req, res) => {

	const { headers, scheduledAppt } = req.body;

	const userId = (jwt.decode(headers.authorization, process.env.SECRET)).sub;
	const chatString = crypto.randomBytes(Math.ceil(3)).toString('hex').slice(0,6);  

	const newApptObj = {
		user_id: userId, 
		mentor: scheduledAppt.mentor,
		date_and_time: scheduledAppt.date_and_time,
		topics: Object.keys(scheduledAppt.topics),
		chat_string: chatString
	} 

	console.log("in addApt, here's the scheduledAppt obj", scheduledAppt);
	console.log("in addAppt, here's the newApptObj", newApptObj);
	
	queries
	.addAppointment(newApptObj)
	.catch(err => console.log("error", err));
}
