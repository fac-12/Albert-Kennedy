const { getAge } = require("./helpers");

const mentorEmailTemplate = appt => {
  const age = getAge(appt.dob);
  const infoContent = appt.info.content
    ? "They gave the following additional info: " + appt.info.content
    : "";
  return `<p> Hi there, </p>
	<p>One of your time slots has been booked! You are now scheduled to connect with ${
    appt.userName
  } on ${appt.date}. Here is a bit more information about ${appt.userName}:
  <ul>
    <li>Location: ${appt.location}</li>
    <li>Age: ${age}</li>
    <li>Sexuality: ${appt.sexuality}</li>
    <li>Gender: ${appt.gender}</li>
    <li>Topics: ${appt.topics}, ${infoContent} </li>
  </ul>
  <p>At the time of your appointment, click on this link: https://tlk.io/${
    appt.chatString
  }.</p>
  <p>It is advised that you click on the link a few minutes before the time of your appointment so that you can be there to greet the young person upon their arrival.
    Please allow up to 15 minutes for the young person to join as they may be running late. If you have any questions about this session, would like some support preparing, or would like to pass this on to an AKT practitioner, please contact onlinesupport@akt.org.uk or call the London office on 020 7831 6562.</p>
    <p>Please be sure to follow the steps below during your session:</p>
  <ul>
	<li>When young person arrives, greet them and asks for their name and what they would like to talk about, just to confirm that they are the expected young person.</li>
	<li>Ask them whether they would like to continue using live chat, or talk using audio or video instead. If they would like an audio or video conversation, share your unique appear.in link with them so that you can both click through to that virtual space. Please note that they can only use appear.in if they are on a computer. If they are on their phone, they can only use live chat.
</li>
	<li>Facilitate your online session with young person – no personal contact details exchanged.</li>
	<li>When closing the session, summarise next steps for young person and confirm whether young person would like another session.</li>
	<li>Asks young person to complete this feedback form and share link: http://bit.ly/aktfeedback. The young person has also been given this link in their appointment confirmation email. AKT will share relevant and appropriate content with you afterwards.</li>
	<li>Wait for young person to leave the online room before leaving yourself.</li>
	<li>Complete session review: https://akt1989.typeform.com/to/FSpuAr. This is received by AKT and you will receive a copy as well.</li>
</ul>
<p>Thank you, enjoy your session, and best wishes,</p>
<p>The Albert Kennedy Trust</p>
<a href="https://www.akt.org.uk">www.akt.org.uk</a>
  `;
};

const userEmailTemplate = appt => {
  return `<p> Hi there ${appt.userName}, </p>
  <p>This email is confirmation of your appointment with ${
    appt.mentorName
  } on ${appt.date}.</p>
  <p> If you need to cancel your appointment, please let us know by visiting your profile and clicking the cancel button.</p>
  <p> At the time of your appointment, click on this link: https://tlk.io/${
    appt.chatString
  }. This will take you to a private chat room where your online mentor will be waiting for you. They will greet you and ask whether you want to continue using live chat or would prefer to use audio or video. </p>
  <p>At the end of the session your online mentor will also ask you to complete this feedback form - http://bit.ly/aktfeedback. This is to help AKT understand if you would like any more support and to improve AKT services, so we’d be really grateful if you could fill it in after your session.</p>
  <p>The Albert Kennedy Trust will treat everything you say confidentially. But if your safety or the safety of someone else is at risk, we are obliged to disclose relevant information with organisations such as the police or social services. If you are in immediate danger you should call emergency services on 999.</p>
  <p>If you have any questions, concerns or need any additional help, you can contact The Albert Kennedy Trust directly by emailing us: onlinesupport@akt.org.uk</p>
  <p>Best wishes,</p>
  <p>The Albert Kennedy Trust</p>
  <a href="https://www.akt.org.uk">www.akt.org.uk</a>
  `;
};

const aktEmailTemplate = appt => {
  return `<p>An appointment has been made via the inter-AKT app.
    ${appt.userName} has an appointment with ${appt.mentorName} on ${
    appt.date
  }.`;
};

module.exports = { mentorEmailTemplate, userEmailTemplate, aktEmailTemplate };
