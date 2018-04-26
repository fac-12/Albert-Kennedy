// const db = require("../database/db_connections");
const Airtable = require("airtable");
const adminBase = new Airtable({ apiKey: "keyrTEGPBVowroQzb" }).base(
  "appms40YF7qdII2xB"
);
const mentorBase = new Airtable({ apiKey: "keyrTEGPBVowroQzb" }).base(
  "appxfdXbDUpQU50QG"
);
// require("env2")("config.env");

const getMentors = () => {
  const mentorObj = [];
  return mentorBase("mentor_list")
    .select({
      fields: ["name", "description", "img_url"]
    })
    .all()
    .then(records => {
      records.forEach(record => {
        mentorObj.push(record.fields);
      });
      return mentorObj;
    })
    .catch(err => {
      console.log(err);
    });
};

const getAvailabilities = mentor => {
  const appointmentObj = [];
  return mentorBase(mentor)
    .select()
    .all()
    .then(records => {
      records.map(record => {
        appointmentObj.push(record.fields.date);
        console.log("after .push() :", appointmentObj);
        return appointmentObj;
      });
    })
    .catch(console.log);
};
getAvailabilities("Max");

const getAppointments = mentor => {
  return adminBase("appointments")
    .select({
      fields: ["date"]
    })
    .all()
    .then(records => {
      console.log("in getAppointments query: ", records[0].fields.date);
      return records.fields;
    })
    .catch(console.log);
};

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
//
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
  // addUser,
  // getUserById,
  getMentors,
  getAppointments,
  getAvailabilities
  // getEmailDetails,
  // addAppointment,
  // getUserAppointments
};
