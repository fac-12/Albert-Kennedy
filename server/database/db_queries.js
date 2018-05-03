const db = require("../database/db_connections");
const r = require("ramda");

const getUser = email => {
  return db
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then(users => users[0]);
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
      `UPDATE users SET (reset_password_token, time_token_created) = ($1, current_timestamp) WHERE email = $2 RETURNING NAME, EMAIL, RESET_PASSWORD_TOKEN`,
      [token, email]
    )
    .then(user => {
      return user[0];
    });
};

const getUserByToken = token => {
  return new Promise((resolve, reject) => {
    db
      .query(
        `SELECT time_token_created, (EXTRACT(EPOCH FROM current_timestamp - time_token_created)/3600)::Integer AS "time_passed" FROM users WHERE reset_password_token = $1`,
        [token]
      )
      .then(tokenExpiry => {
        return resolve(tokenExpiry[0]);
      });
  });
};

const updatePassword = (token, hash) => {
  db.query(
    `UPDATE users SET (password, reset_password_token, time_token_created) = ($1, null, null) WHERE reset_password_token = $2`,
    [hash, token]
  );
};

module.exports = {
  getUser,
  addUser,
  getUserById,
  addToken,
  getUserByToken,
  updatePassword
};
