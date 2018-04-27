// const queries = require("./queries");
const airtable = require("../airtable/airtable_helpers");
const request = require("request");

exports.getMentors = (req, res) => {
  airtable
    .getMentors()
    .then(mentors => {
      console.log("in get mentors");
      res.send(JSON.stringify(mentors));
    })
    .catch(console.log);
};

exports.getAvailabilities = (req, res) => {
  const { mentor } = req.query;
  const apppointmentObj = airtable.filterAvailabilities(mentor)

    if (!appointmentObj) {
      return res.send("none");
    } else {
    res.send(JSON.stringify(appointmentObj));
      }
    };
