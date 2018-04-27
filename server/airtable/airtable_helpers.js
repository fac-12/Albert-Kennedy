const Airtable = require('airtable');
const r = require('ramda')
require('env2')('config.env');

const adminBase = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
  process.env.AIRTABLE_ADMIN_BASE
);

const mentorBase = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
  process.env.AIRTABLE_MENTOR_BASE
);


// gets all mentors for 'choose a mentor' page

const getMentors = async () => {
  return await mentorBase('mentor_list')
    .select({
      fields: ['name', 'description', 'img_url']
    })
    .all()
    .then(r.map(record => record.fields))
    .catch(err => {
      console.log(err);
    });
};


// gets all availabilites of chosen mentor

const getAvailabilities = mentor => {
  return mentorBase(mentor)
    .select()
    .all()
    .then(records => records.map(record => record.fields.date))
    .catch(console.log);
};


// gets mentor id of chosen mentor

const getMentorId = mentor => {
  return adminBase('mentors')
    .select({
      filterByFormula: `{name} = \"${mentor}\"`,
      fields: ['id']
    })
    .all()
    .then(([record]) => record.fields.id)
    .catch(console.log);
};


// gets all booked appointments of chosen mentor

const getAppointments =  id => {
  return adminBase('appointments')
    .select({
      filterByFormula: `{mentor_id} = \"${id}\"`,
      fields: ['date']
    })
    .all()
    .then(records => records.map(record => record.fields.date))
    .catch(console.log);
};

// filters out already selected appointments 

const compareAvailabilitesAppointments = ({availabilityObj, appointmentObj}) => {
  return availabilityObj.filter(availability => !appointmentObj.includes(availability)
  );
};

// calls all the above functions in order to return to display available time slots on 'choose a time'

const filterAvailabilities =  mentor => {
  return  Promise.all([getAvailabilities(mentor), getMentorId(mentor)])
    .then(async ([availabilityObj, mentorId]) => {
      const appointmentObj = await getAppointments(mentorId)
      return { availabilityObj, appointmentObj }
    })
    .then(compareAvailabilitesAppointments)
    .catch(console.log)
};

console.log(filterAvailabilities("Max"))


// const getEmailDetails = (mentor_name, user_id) => {
// 	return db.query(
// 		`SELECT mentors.email AS mentor_email, users.name as user_name, users.email as user_email FROM mentors, users WHERE mentors.name = $1 and users.id = $2`,
// 		[mentor_name, user_id]
// 	);
// };
//
// const getEmailDetails = (mentor) => {
// 	adminBase('mentors').find("recbPclBtocW0YA2q", function (err, record) {
// 		if (err) { console.error(err); return; }
// 		console.log("getEmailDetails", record.fields.email);
// 	});
// }
// getEmailDetails();

// const addAppointment = newApptObj => {
// 	return db.query(
// 		`INSERT INTO appointments (user_id, mentor_id, date_and_time, topics, chat_string) VALUES ($1, (SELECT id FROM mentors WHERE name = $2),
//     $3, $4, $5)`,
// 		[
// 			newApptObj.user_id,
// 			newApptObj.mentor,
// 			newApptObj.date_and_time,
// 			newApptObj.topics,
// 			newApptObj.chat_string
// 		]
// 	);
// };

// const addAppointment = (newApptObj) => {
// 	adminBase('appointments').create({
//   "user_id": [
//     "recd7JeRiJi3Hfvvy"
//   ],
//   "mentor_id": [
//     "recbPclBtocW0YA2q"
//   ],
//   "date_and_time": "2018-04-27T13:29:00.000Z",
//   "topics": "careers"
// }, function(err, record) {
//     if (err) { console.error(err); return; }
//     console.log("addAppointment", record.getId());
// });
// }

// addAppointment();

// const getUserAppointments = user_id => {
// 	return db.query(
// 		`SELECT mentors.name, appointments.date_and_time, appointments.chat_string, mentors.img_url
//     FROM appointments
//     INNER JOIN mentors ON (appointments.mentor_id = mentors.id) WHERE appointments.user_id = $1`,
// 		[user_id]
// 	);
// };

// adminBase('users').find('recd7JeRiJi3Hfvvy', function(err, record) {
// 	    if (err) { console.error(err); return; }
// 	    console.log("getUserAppointments", record.fields.appointments);
// 	});
// }
// const getUserAppointments = (appointments) => {
// adminBase('appointments').select({
// 	fields : ["mentor_id", "date_and_time"]
// }).eachPage(function page (records, fetchNextPage) {
// 	records.forEach(function(record) {
// 		console.log("getUserAppointments", record.fields);
// 		return record;
// 	})
// 	fetchNextPage();
// }, function done(err){
// 	if (err) {console.error(err); return; }
// })
// }
// getUserAppointments("receGY3BBjfIZErlK");

module.exports = {
// getUser,
filterAvailabilities,
// addUser,
// getUserById,
getMentors
// getAppointments,
// getAvailabilities
// getEmailDetails,
// addAppointment,
// getUserAppointments
};
