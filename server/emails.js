const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "hellointerakt@gmail.com",
		pass: process.env.PASSWORD
	}
});

const mentor_confirmation_email = mentor_email => {
	const mentor_email = {
		from: "hellointerakt@gmail.com",
		to: mentor_email,
		subject: "inter-AKT appointment confirmation",
		html: `<p> Hello, </p>
  <p>This is to confirm that you have a chat with { user.name } scheduled on { scheduledAppt.date_and_time }. Please visit { chatString } at the scheduled time.</p>
  <p>Thank you inter-AKT</p>`
	};

	transporter.sendMail(mentor_confirmation_email, function(error, info) {
		if (error) {
			throw error;
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

const user_confirmation_email = (user_email, keyword) => {
	const user_email = {
		from: "hellointerakt@gmail.com",
		to: user_email,
		subject: "inter_AKT appointment confirmation",
		html: `<p> Hello, { scheduledAppt.mentor }</p>
  <p>This is to confirm you have made an appointment to chat with { scheduledAppt.mentor } at { scheduledAppt.date_and_time }. Please visit this { chatString } at the scheduled time. </p>
  <p>Thank you for using inter-AKT</p>`
	};

	transporter.sendMail(user_email, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

const akt_email = (email, name, link) => {
	const akt_email = {
		from: "hellointerakt@gmail.com",
		to: "hellointerakt@gmail.com",
		subject: "inter-AKT appointment scheduled",
		html: `<p>An appointment has been made via the inter-AKT app.
    {INSERT USER NAME} has an appointment with { scheduledAppt.mentor } on { scheduledAppt.date_and_time }.`
	};

	transporter.sendMail(akt_email, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports = {
	mentor_email,
	user_email,
	akt_email
};
