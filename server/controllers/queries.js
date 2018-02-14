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
  return db
  .query(`SELECT * FROM appointments WHERE date_and_time = $1 AND mentor_id = (SELECT id FROM mentors WHERE name = $2)`, [datetime, mentor])
}

const addAppointment = (scheduledAppt) => {
  return db
  .query(`INSERT INTO appointments (user_id, mentor_id, date_and_time, topics, chat_string) VALUES ($1, (SELECT id FROM mentors WHERE name = $2), 
    $3, ARRAY$4, $5)`, [this.user_id, this.mentor, this.date_and_time, this.topics, this.chat_string])
}

module.exports = {
  getUser,
  addUser,
  getUserById,
  getMentors, 
  getAppointments, 
  addAppointment
};
