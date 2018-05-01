const nodemailer = require('nodemailer')
require('env2')('config.env');

// checks if the date of the appointment is tomorrow

const isAppointmentTomorrow = date => {
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
  const tomorrowDateString = tomorrowDate.toISOString().slice(0,10);
  const apptDateString = date.toISOString().slice(0,10);

  return apptDateString === tomorrowDateString;
};

// defines nodemailer transporter with correct info

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hellointerakt@gmail.com',
    pass: process.env.PASSWORD
  }
});

// defines function to send emails

const transporterFunction = (emailToSend) => {
  console.log("in transporter")
  transporter.sendMail(emailToSend, function(error, info) {
  if (error) {
    throw error;
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports = { isAppointmentTomorrow, transporterFunction };

// sets transporter function

