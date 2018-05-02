const queries = require('../database/db_queries');
const airtable = require('../airtable/airtable_helpers');
const { hashPassword } = require('../services/bcrypt');
const jwt = require('jwt-simple');
const { generateToken } = require('./helpers');
const {
  userUpdatePasswordEmail
} = require('../emails/sendUpdatePasswordEmails');
const { EmailNotFoundError } = require('./customErrors');
const ExtendPromise = require('bluebird').resolve();

// const makeFancyPromise = promise => x => ExtendPromise.then(() => promise(x));
const makeFancyPromise = function(promise) {
  return function(...args) {
    return ExtendPromise.then(function() {
      return promise.apply(this, args);
    });
  };
};

const userToken = id => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: id, iat: timestamp }, process.env.SECRET);
};

exports.signUp = (req, res) => {
  const { name, email, password, confirmPassword, postcode } = req.body;

  if (!name || !email || !password || !confirmPassword || !postcode) {
    return res
      .status(422)
      .send({ error: 'You must provide a name, email, location and password' });
  } else if (password !== confirmPassword) {
    return res.status(422).send({ error: "Your passwords don't match!" });
  } else {
    queries
      .getUser(email)
      .then(user => {
        return new Promise((resolve, reject) => {
          if (user) {
            res.status(422).send({ error: 'Email is in use. Please log in.' });
            reject('Email is in use. Please log in');
          } else resolve(hashPassword(password));
        });
      })
      .then(hash => {
        return queries.addUser(name, email, hash);
      })
      .then(user => {
        return airtable.addUser(user);
      })
      .then(userId => {
        res.json({ token: userToken(userId) });
      })
      .catch(console.log);
  }
};

exports.signIn = (req, res) => {
  res.json({ token: userToken(req.user.id) });
};

exports.getUser = (req, res) => {
  res.send(req.user);
};

const trace = label => x => {
  console.log(label, x);
  return x;
};

exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  const getUser = makeFancyPromise(queries.getUser);
  console.log('getUser', getUser);

  getUser(email)
    .catch(() => Promise.reject(new EmailNotFoundError()))
    .then(generateToken)
    .then(token => {
      const token_expires = Date.now() + 24 * 60 * 60 * 1000;
      return queries.addToken(email, token, token_expires);
    })
    .then(user => {
      const emailObject = {
        name: user.name,
        email: user.email,
        passwordLink:
          'http://localhost:3000/resetpassword?token=' +
          user.reset_password_token
      };

      userUpdatePasswordEmail(emailObject);
      res.send({ message: 'An email has been sent with instructions' });
    })
    .catch(EmailNotFoundError, () => {
      return res
        .status(404)
        .send({ err: "This email address doesn't exist in the database" });
    })
    .catch(err => {
      return res
        .status(422)
        .send({ err: 'Sorry, there was a problem on our end!' });
    });
};
