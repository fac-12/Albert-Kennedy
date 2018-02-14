const queries = require("./queries");

exports.profileAppointments = (req, res) => {
	console.log("before queries");
	queries
		.getUserAppointments(req.user.id)
		.then(appointments => {
			res.send(JSON.stringify(appointments));
		})

		.catch(err => console.log("error", err));
};
