const queries = require('./queries');

exports.getMentors = (req, res) => {
  queries
  .getMentors()
  .then(mentors => {
    res.send(mentors);
  })
  .catch(console.log)
};
