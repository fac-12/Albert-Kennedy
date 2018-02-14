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

const addAppointment = newApptObj => {
	return db.query(
		`INSERT INTO appointments (user_id, mentor_id, date_and_time, topics, chat_string) VALUES ($1, (SELECT id FROM mentors WHERE name = $2),
    $3, $4, $5)`,
		[
			newApptObj.user_id,
			newApptObj.mentor,
			newApptObj.date_and_time,
			newApptObj.topics,
			newApptObj.chat_string
		]
	);
};

const getUserAppointments = userId => {
	console.log("hello!!", userId);
	return db.query(`SELECT * FROM appointments WHERE user_id = $1`, [userId]);
};

module.exports = {
	getUser,
	addUser,
	getUserById,
	getMentors,
	getAppointments,
	addAppointment,
	getUserAppointments
};
