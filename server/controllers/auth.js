const queries = require("../database/db_queries");
const airtable = require("../airtable/airtable_helpers");
const { hashPassword } = require("../services/bcrypt");
const jwt = require("jwt-simple");
const r = require("ramda");
const { generateToken } = require("./helpers");
const {
  userUpdatePasswordEmail
} = require("../emails/sendUpdatePasswordEmails");
const {
  EmailNotFoundError,
  TokenNotFoundError,
  TokenExpiredError
} = require("./customErrors");
const ExtendPromise = require("bluebird").resolve();

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
  const {
    name,
    email,
    password,
    confirmPassword,
    postcode,
    dob,
    ethnicity,
    gender,
    sexuality
  } = req.body;

  const userObject = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !confirmPassword ||
    !postcode ||
    !dob ||
    !ethnicity ||
    !gender ||
    !sexuality
  ) {
    return res
      .status(422)
      .send({ error: "You must provide a name, email, postcode and password" });
  } else if (password !== confirmPassword) {
    return res.status(422).send({ error: "Your passwords don't match!" });
  } else {
    queries
      .getUser(email)
      .then(user => {
        return new Promise((resolve, reject) => {
          if (user) {
            res.status(422).send({ error: "Email is in use. Please log in." });
            reject("Email is in use. Please log in");
          } else resolve(hashPassword(password));
        });
      })
      .then(hash => {
        return queries.addUser(name, email, hash);
      })
      .then(userDb => {
        const userObject = { ...req.body, id: userDb.id };
        return airtable.addUser(userObject);
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

exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  const getUser = makeFancyPromise(queries.getUser);

  getUser(email)
    .then(user => {
      return new Promise((resolve, reject) => {
        if (r.isEmpty(user)) return reject("No user found");
        return resolve(user);
      });
    })
    .catch(() => {
      throw new EmailNotFoundError();
    })
    .then(generateToken)
    .then(token => {
      return queries.addToken(email, token);
    })
    .then(user => {
      const emailObject = {
        name: user.name,
        email: user.email,
        passwordLink:
          "http://localhost:3000/resetpassword?token=" +
          user.reset_password_token
      };

      userUpdatePasswordEmail(emailObject);
      res.send({
        message:
          "An email has been sent with instructions on changing your password."
      });
    })
    .catch(EmailNotFoundError, () => {
      return res.status(404).send({
        error: "We don't have a user with this email, please sign up!"
      });
    })
    .catch(err => {
      return res
        .status(422)
        .send({ error: "Sorry, there was a problem sending your email!" });
    })
    .catch(err => {
      return res
        .status(422)
        .send({ error: "Sorry, there was a problem on our end!" });
    });
};

exports.resetPassword = (req, res) => {
  const { newPassword, confirmPassword, token } = req.body;
  const getUserByToken = makeFancyPromise(queries.getUserByToken);

  if (!newPassword || !confirmPassword) {
    return res
      .status(422)
      .send({ error: "You must provide a new password and confirm it" });
  } else if (newPassword !== confirmPassword) {
    return res.status(422).send({ error: "Your passwords don't match!" });
  } else {
    getUserByToken(token)
      .catch(() => {
        throw new TokenNotFoundError();
      })
      .then(tokenExpiry => {
        if (tokenExpiry.time_passed >= 24) throw new TokenExpiredError();
      })
      .then(() => hashPassword(newPassword))
      .then(hash => {
        return queries.updatePassword(token, hash);
      })
      .then(() => {
        return res.send({
          message: "Your password has been updated, please sign in! "
        });
      })
      .catch(TokenNotFoundError, () => {
        return res.status(404).send({
          error: "We don't have a user with this email, please sign up!"
        });
      })
      .catch(TokenExpiredError, () => {
        return res
          .status(404)
          .send({ error: "Your token has expired, please try again" });
      })
      .catch(err => {
        return res
          .status(422)
          .send({ error: "Sorry, there was a problem on our end!" });
      });
  }
};
