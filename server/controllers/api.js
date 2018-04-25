const queries = require("./queries");
const airtable = require("../airtable/airtable_helpers");
const request = require("request");


exports.getMentors = (req, res) => {
	airtable
		.getMentors()
		.then(mentors => {
			console.log("here");
			res.send(JSON.stringify(mentors));
		})
		.catch(console.log);
};

exports.getAvailabilities = (req, res) => {
	const { mentor } = req.query;
	const url = `${process.env.GOOGLE_1}${mentor}?key=${process.env.API_KEY}`;

	request(url, (error, response, body) => {
		if (error)
			return res.status(500).send({
				error:
					"There was a network issue. Please make sure you are connected to the internet"
			});

		const data = JSON.parse(body).values;
		if (!data) {
			return res.send("none");
		} else {
			const availabilities = data.slice(1);
			const filteredAvailabilities = [];
			let counter = 0;

			const filterAvailabilities = availabilities => {
				availabilities.forEach(availability => {
					queries
						.getAppointments(
							mentor,
							(availability[0] + " " + availability[1]).toString()
						)
						.then(result => {
							counter++;
							if (result.length === 0)
								filteredAvailabilities.push(availability);
							if (counter === availabilities.length)
								res.send(JSON.stringify(filteredAvailabilities));
						})
						.catch(console.log(error));
				});
			};

			filterAvailabilities(availabilities);
		}
	});
};
