const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hellointerakt@gmail.com',
    pass: process.env.PASSWORD
  }
});

const mentorConfirmationEmail = (
  emailAddress,
  userName,
  dateTime,
  chatString,
  topics, 
  info
) => {
  const infoContent = info.content ? "They gave the following additional info: " + info.content : ""
  const mentorEmail = {
    from: 'hellointerakt@gmail.com',
    to: `${emailAddress}`,
    subject: 'New AKT online mentoring appointment',
    html: `<p> Hi there, </p>
  <p>One of your time slots has been booked. You are now scheduled to connect with ${userName} on ${dateTime}. ${userName} has said they would like to discuss ${topics}. ${infoContent}</p>
  <p>At the time of your appointment, click on this link: https://tlk.io/${chatString}. It is advised that you click on the link a few minutes before the time of your appointment so that you can greet the young person once they arrive. Please allow up to 15 minutes for the young person to join as they may be running late.</p>
  <p>Please be sure to follow the steps below during your session. If you have any questions you can contact Tom: tomj@akt.org.uk.</p>
  <ol>
	<li>When young person arrives, greet them and asks for their name and what they would like to talk about, just to confirm that they are the expected young person.</li>
	<li>Ask them whether they would like to continue using live chat, or talk using audio or video instead. If they would like an audio or video conversation, share your unique appear.in link with them so that you can both click through to that virtual space. Please note that they can only use appear.in if they are on a computer. If they are on their phone, they can only use live chat.</li>
	<li>Facilitate your online session with young person – no personal contact details exchanged.</li>
	<li>When closing the session, summarise next steps for young person and confirm whether young person would like another session.</li>
	<li>Asks young person to complete this feedback form and share link: http://bit.ly/aktfeedback. The young person has also been given this link in their appointment confirmation email. AKT will share relevant and appropriate content with you afterwards.</li>
	<li>Wait for young person to leave the online room before leaving yourself.</li>
	<li>Complete session review: https://goo.gl/forms/uEdXig4YxBfptu9l2. This is received by AKT and you will receive a copy as well.</li>
</ol>
  `
  };

  transporter.sendMail(mentorEmail, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log('Email sent: ' + info.response);
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
    from: 'hellointerakt@gmail.com',
    to: `${emailAddress}`,
    subject: 'AKT online mentoring appointment confirmed',
    html: `<p> Hi there ${userName}, </p>
  <p>This email is confirmation of your appointment with ${mentorName} at ${dateTime}.</p>
  <p> At the time of your appointment, click on this link: https://tlk.io/${chatString}. This link will take you to a private chat room where your online mentor will be waiting for you. They will greet you and ask whether you want to continue using live chat or would prefer to use audio or video. </p> 
  <p>At the end of the session your online mentor will also ask you to complete this feedback form - http://bit.ly/aktfeedback. This is to help AKT understand if you would like any more support and to improve AKT services, so we’d be really grateful if you could fill it in after your session.</p>  
  <p>The Albert Kennedy Trust will treat everything you say confidentially. But if your safety or the safety of someone else is at risk, we are obliged to disclose relevant information with organisations such as the police or social services. If you are in immediate danger you should call emergency services on 999.</p>
  <p>If you have any questions ahead of your appointment, or if you need to rearrange, you can get in touch with AKT by emailing tomj@akt.org.uk</p>`
  };

  transporter.sendMail(userEmail, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

const aktConfirmationEmail = (userName, mentorName, dateTime) => {
  const aktEmail = {
    from: 'hellointerakt@gmail.com',
    to: 'hellointerakt@gmail.com',
    subject: 'inter-AKT appointment scheduled',
    html: `<p>An appointment has been made via the inter-AKT app.
    ${userName} has an appointment with ${mentorName} on ${dateTime}.`
  };

  transporter.sendMail(aktEmail, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = {
  mentorConfirmationEmail,
  userConfirmationEmail,
  aktConfirmationEmail
};
