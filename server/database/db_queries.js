const db = require("../database/db_connections");
const r = require("ramda");

const trace = label => x => {
  console.log(label, x);
  return x;
};

const getUser = email => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE email = $1", [email]).then(users => {
      if (r.isEmpty(users)) return reject("No user found");
      return resolve(users[0]);
    });
  });
};

const addUser = (name, email, password) => {
  return db
    .query(
      `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING NAME, ID, EMAIL`,
      [name, email, password]
    )
    .then(user => user[0]);
};

const getUserById = id => {
  return db
    .query(`SELECT * FROM users WHERE id = $1`, [id])
    .then(user => user[0]);
};

const addToken = (email, token) => {
  return db
    .query(
      `UPDATE users SET (reset_password_token, reset_password_expires) = ($1, current_timestamp) WHERE email = $2 RETURNING NAME, EMAIL, RESET_PASSWORD_TOKEN`,
      [token, email]
    )
    .then(user => {
      return user[0];
    });
};

const getUserByToken = token => {
  return new Promise ((resolve, reject) => {
    db.query(`SELECT reset_password_expires, (EXTRACT(EPOCH FROM current_timestamp - reset_password_expires)/3600)::Integer AS "time_passed" FROM users WHERE reset_password_token = $1`, [token])
      .then(timePassed => {
        return resolve(timePassed)
      });
    });
}

module.exports = {
  getUser,
  addUser,
  getUserById,
  addToken, 
  getUserByToken
};

