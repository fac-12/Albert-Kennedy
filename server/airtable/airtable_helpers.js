// const db = require("../database/db_connections");
const Airtable = require('airtable');
const adminBase = new Airtable({ apiKey : 'keyrTEGPBVowroQzb'}).base('appms40YF7qdII2xB');
const mentorBase = new Airtable({ apiKey : 'keyrTEGPBVowroQzb'}).base('appxfdXbDUpQU50QG');
// require("env2")("config.env");

// const getMentors = () => {
// 	mentorBase('mentor_list').select().eachPage(function page (records, fetchNextPage) {
// 		records.forEach(function(record) {
// 			console.log(record.fields);
// 			return record;
// 		})
// 		fetchNextPage();
// 	}, function done(err){
// 		if (err) {console.error(err); return; }
// 	})
// };
//
// getMentors();

// const getAppointments = (mentor, datetime) => {
// 	return db.query(
// 		`SELECT * FROM appointments WHERE date_and_time = $1 AND mentor_id = (SELECT id FROM mentors WHERE name = $2)`,
// 		[datetime, mentor]
// 	);
// };

//
// const getAppointments = (mentor) => {
// 	mentorBase(mentor).select().eachPage(function page (records, fetchNextPage) {
// 		records.forEach(function(record) {
// 			console.log("getAppointments", record.fields);
// 			return record;
// 		})
// 		fetchNextPage();
// 	}, function done(err){
// 		if (err) {console.error(err); return; }
// 	})
// }
//
// getAppointments('Lucy');

//
// const getEmailDetails = (mentor_name, user_id) => {
// 	return db.query(
// 		`SELECT mentors.email AS mentor_email, users.name as user_name, users.email as user_email FROM mentors, users WHERE mentors.name = $1 and users.id = $2`,
// 		[mentor_name, user_id]
// 	);
// };
//
// const getEmailDetails = () => {
// 	adminBase('mentors').find("recbPclBtocW0YA2q", function (err, record) {
// 		if (err) { console.error(err); return; }
// 		console.log(record.fields);
// });
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
//     console.log(record.getId());
// });
// }
//
// addAppointment();

//
//
// const getUserAppointments = user_id => {
// 	return db.query(
// 		`SELECT mentors.name, appointments.date_and_time, appointments.chat_string, mentors.img_url
//     FROM appointments
//     INNER JOIN mentors ON (appointments.mentor_id = mentors.id) WHERE appointments.user_id = $1`,
// 		[user_id]
// 	);
// };

const getUserAppointments = () => {
	adminBase('appointments').find('receGY3BBjfIZErlK', function(err, record) {
		    if (err) { console.error(err); return; }
		    console.log(record.fields);
		});
	}

getUserAppointments();


//
// module.exports = {
// 	getUser,
// 	addUser,
// 	getUserById,
// 	getMentors,
// 	getAppointments,
// 	getEmailDetails,
// 	addAppointment,
// 	getUserAppointments
// };
