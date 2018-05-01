const db = require('../database/db_connections');

const getUser = email => {
  return db
    .query('SELECT * FROM users WHERE email = $1', [email])
    .then(user => user[0]);
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

const addToken = (email, token, token_expires) => {
  return db
  .query(`UPDATE users SET (reset_password_token, reset_password_expires) = ($1, to_timestamp($2)) WHERE email = $3 RETURNING NAME, EMAIL, RESET_PASSWORD_TOKEN`, 
  [token, token_expires, email])
  .then(user => {
    return user[0];
  })
}

module.exports = {
  getUser,
  addUser,
  getUserById, 
  addToken
};

