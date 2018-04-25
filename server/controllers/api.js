const queries = require("./queries");
const airtable = require("../airtable/airtable_helpers");
const request = require("request");

exports.getMentors = (req, res) => {
  airtable
    .getMentors()
    .then(mentors => {
      console.log("mentors");
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
      console.log("appointmentObj3", appointmentObj);
      let counter = 0;

      const filterAvailabilities = appointmentObj => {
        const filteredAvailabilities = [];
        appointmentObj
          .forEach(appointment => {
            airtable.getAppointments(mentor, appointment).then(result => {
              console.log("this is appointment!!", appointment);
              counter++;
              if (result.length === 0)
                appointmentObj.push(filteredAvailabilities);
              if (counter === appointmentObj.length) {
                console.log("filtered", filteredAvailabilities);
                res.send(JSON.stringify(filteredAvailabilities));
              }
            });
          })
          .catch(console.log);
      };
      filterAvailabilities(appointmentObj);
    }
  });
};
