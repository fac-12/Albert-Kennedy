const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "hellointerakt@gmail.com",
		pass: process.env.PASSWORD
	}
});

const mentorConfirmationEmail = (
	emailAddress,
	userName,
	dateTime,
	chatString
) => {
	const mentorEmail = {
		from: "hellointerakt@gmail.com",
		to: `${emailAddress}`,
		subject: "inter-AKT appointment confirmation",
		html: `<p> Hello, </p>
  <p>This is to confirm that you have a chat with ${userName} scheduled on ${dateTime}. Please visit this link: https://appear.in/${chatString} at the scheduled time.</p>
  <p>Thank you inter-AKT</p>`
	};

	transporter.sendMail(mentorEmail, function(error, info) {
		if (error) {
			throw error;
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

const userConfirmationEmail = (
	emailAddress,
	userName,
	mentorName,
	dateTime,
	chatString
) => {
	const userEmail = {
		from: "hellointerakt@gmail.com",
		to: `${emailAddress}`,
		subject: "inter_AKT appointment confirmation",
		html: `<p> Hello, ${userName}</p>
  <p>This is to confirm you have made an appointment to chat with ${mentorName} at ${dateTime}. Please visit this link: https://appear.in/${chatString} at the scheduled time. This will take you to an external site and the chat will only be between you and ${mentorName}. You have the option to chat via video, audio or messaging. </p>
  <p>Thank you for using inter-AKT</p>`
	};

	transporter.sendMail(userEmail, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

const aktConfirmationEmail = (userName, mentorName, dateTime) => {
	const aktEmail = {
		from: "hellointerakt@gmail.com",
		to: "hellointerakt@gmail.com",
		subject: "inter-AKT appointment scheduled",
		html: `<p>An appointment has been made via the inter-AKT app.
    ${userName} has an appointment with ${mentorName} on ${dateTime}.`
	};

	transporter.sendMail(aktEmail, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports = {
	mentorConfirmationEmail,
	userConfirmationEmail,
	aktConfirmationEmail
};
