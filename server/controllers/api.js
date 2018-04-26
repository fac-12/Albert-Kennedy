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
  airtable.getAvailabilities(mentor).then(appointmentObj => {
    let data = appointmentObj;
    if (!data) {
      return res.send("none");
    } else {
      const filterAvailabilities = appointmentObj => {
        airtable
          .getAppointments(mentor, appointment)
          .then(result => {
            appointmentObj.forEach(appointment => {
              console.log("appointmentObj!!", appointmentObj);
              const filteredAvailabilities = [];
              let counter = 0;
              counter++;
              if (result.length === 0)
                appointmentObj.push(filteredAvailabilities);
              console.log("line 34", filteredAvailabilities);
              if (counter === appointmentObj.length) {
                console.log("this is appointment!!", appointmentObj);
                console.log("filtered", filteredAvailabilities);
                res.send(JSON.stringify(appointmentObj));
              }
            });
          })
          .catch(console.log);
      };
      filterAvailabilities(appointmentObj);
    }
  });
};
