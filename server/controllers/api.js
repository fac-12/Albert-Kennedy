const queries = require('./queries');
const request = require('request');

exports.getMentors = (req, res) => {
  queries
  .getMentors()
  .then(mentors => {
    res.send(JSON.stringify(mentors));
  })
  .catch(console.log)
};


exports.getAvailabilities = (req, res) => {
  const { mentor } = req.query;
  const url = `${process.env.GOOGLE_1}${mentor}?key=${process.env.API_KEY}`;

  request(url, (error, response, body) => {
    if (error) return res.status(500).send({ error: "There was a network issue. Please make sure you are connected to the internet"});
    const bodyParsed = JSON.parse(body);
    const initialDates = bodyParsed.values.slice(1,6);
    res.send(JSON.stringify(initialDates));
  })
  }
