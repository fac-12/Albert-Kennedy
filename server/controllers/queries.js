const db = require("../database/db_connections");

const getUser = email => {
	return db
		.query("SELECT * FROM users WHERE email = $1", [email])
		.then(user => user[0]);
};

const addUser = (name, email, password) => {
	return db
		.query(
			`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING NAME, ID`,
			[name, email, password]
		)
		.then(user => user[0]);
};

const getUserById = id => {
	return db
		.query(`SELECT * FROM users WHERE id = $1`, [id])
		.then(user => user[0]);
};

const getMentors = () => {
	return db.query("SELECT * FROM mentors");
};

const getAppointments = (mentor, datetime) => {
	return db.query(
		`SELECT * FROM appointments WHERE date_and_time = $1 AND mentor_id = (SELECT id FROM mentors WHERE name = $2)`,
		[datetime, mentor]
	);
};

const getEmailDetails = (mentor_name, user_id) => {
	return db.query(
		`SELECT mentors.email AS mentor_email, users.name as user_name, users.email as user_email FROM mentors, users WHERE mentors.name = $1 and users.id = $2`,
		[mentor_name, user_id]
	);
};

const addAppointment = newApptObj => {
	return db.query(
		`INSERT INTO appointments (user_id, mentor_id, date_and_time, topics, info, chat_string) VALUES ($1, (SELECT id FROM mentors WHERE name = $2),
    $3, $4, $5, $6)`,
		[
			newApptObj.user_id,
			newApptObj.mentor,
			newApptObj.date_and_time,
			newApptObj.topics,
			newApptObj.info,
			newApptObj.chat_string
		]
	);
};

const getUserAppointments = user_id => {
	return db.query(
		`SELECT mentors.name, appointments.date_and_time, appointments.chat_string, mentors.img_url
    FROM appointments
    INNER JOIN mentors ON (appointments.mentor_id = mentors.id) WHERE appointments.user_id = $1`,
		[user_id]
	);
};

module.exports = {
	getUser,
	addUser,
	getUserById,
	getMentors,
	getAppointments,
	getEmailDetails,
	addAppointment,
	getUserAppointments
};
