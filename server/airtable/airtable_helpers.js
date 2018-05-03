const Airtable = require("airtable");
const r = require("ramda");
require("env2")("config.env");
const BBPromise = require("bluebird");

const adminBase = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
  process.env.AIRTABLE_ADMIN_BASE
);

const mentorBase = new Airtable({ apiKey: process.env.AIRTABLE_API }).base(
  process.env.AIRTABLE_MENTOR_BASE
);

const trace = message => x => {
  console.log(message, x);
  return x;
};

// clears mentor info from adminBase

const notInAdminBase = mentor => {
  return adminBase("mentors")
    .select({
      filterByFormula: `{email} = \"${mentor.email}\"`
    })
    .all()
    .then(mentor => r.isEmpty(mentor))
    .catch(console.log);
};

// updates mentor info in adminBase from mentorBase

const updateAdminMentors = () => {
  return mentorBase("mentor_list")
    .select({
      fields: ["name", "email", "description", "img_url"]
    })
    .all()
    .then(r.map(record => record.fields))
    .then(trace("before filter"))
    .then(mentors => {
      return BBPromise.filter(mentors, notInAdminBase);
    })
    .then(trace("after filter"))
    .then(
      r.map(mentorFields => {
        return adminBase("mentors").create({
          name: mentorFields.name,
          email: mentorFields.email,
          description: mentorFields.description,
          img_url: mentorFields.img_url
        });
      })
    )
    .catch(console.log);
};

// gets all mentors for 'choose a mentor' page

const getMentors = () => {
  return mentorBase("mentor_list")
    .select({
      fields: ["name", "description", "img_url"]
    })
    .all()
    .then(r.map(record => record.fields))
    .catch(err => {
      console.log(err);
    });
};

// gets all availabilites of chosen mentor

const getAvailabilities = mentor => {
  return mentorBase(mentor)
    .select()
    .all()
    .then(records => records.map(record => record.fields.date))
    .catch(console.log);
};

// gets mentor id of chosen mentor

const getMentorId = mentor => {
  return adminBase("mentors")
    .select({
      filterByFormula: `{name} = \"${mentor}\"`,
      fields: ["id"]
    })
    .all()
    .then(([record]) => record.fields.id)
    .catch(console.log);
};

// gets all booked appointments of chosen mentor

const getAppointments = id => {
  return adminBase("appointments")
    .select({
      filterByFormula: `{mentor_id} = \"${id}\"`,
      fields: ["date"]
    })
    .all()
    .then(records => records.map(record => record.fields.date))
    .catch(console.log);
};

// filters out already selected appointments

const compareAvailabilitesAppointments = ({
  availabilityObj,
  appointmentObj
}) => {
  return availabilityObj.filter(
    availability => !appointmentObj.includes(availability)
  );
};

// calls all the above functions in order to return to display available time slots on 'choose a time'

const filterAvailabilities = mentor => {
  return Promise.all([getAvailabilities(mentor), getMentorId(mentor)])
    .then(async ([availabilityObj, mentorId]) => {
      const appointmentObj = await getAppointments(mentorId);
      return { availabilityObj, appointmentObj };
    })
    .then(compareAvailabilitesAppointments)
    .catch(console.log);
};

// gets airtable record id for mentor by name

const getMentorRecordId = mentor => {
  return adminBase("mentors")
    .select({
      filterByFormula: `{name} = \"${mentor}\"`
    })
    .all()
    .then(([record]) => record.id)
    .catch(console.log);
};

// gets airtable record id for user by database id

const getUserRecordId = user_id => {
  return adminBase("users")
    .select({
      filterByFormula: `{id} = \"${user_id}\"`
    })
    .all()
    .then(([record]) => record.id)
    .catch(console.log);
};

// adds an appointment into airtable appointments table

const insertAppointment = ({
  user_id,
  mentor_id,
  date_and_time,
  topics,
  info,
  chat_string
}) => {
  return adminBase("appointments")
    .create({
      user_id: [user_id],
      mentor_id: [mentor_id],
      date_and_time: date_and_time,
      topics: topics,
      chat_string: chat_string,
      info: info
    })
    .then(() => [mentor_id, user_id])
    .catch(console.log);
};

// gets necessary info to format newApptObj from the front end before putting it into airtable

const addAppointment = newApptObj => {
  return Promise.all([
    getMentorRecordId(newApptObj.mentor),
    getUserRecordId(newApptObj.user_id)
  ])
    .then(([mentorId, userId]) => {
      newApptObj.mentor_id = mentorId;
      newApptObj.user_id = userId;
      return insertAppointment(newApptObj);
    })
    .catch(console.log);
};

// get user and mentor emails

const getEmailDetails = ([mentorId, userId]) => {
  const getDetails = (table, id) => {
    return adminBase(table)
      .find(id)
      .then(record => [record.fields.email, record.fields.name])
      .catch(console.log);
  };

  return Promise.all([
    getDetails("mentors", mentorId),
    getDetails("users", userId)
  ]).catch(console.log);
};

const getExtraUserInformation = userId => {
  console.log("in get extra info", userId);
  return adminBase("users")
    .select({
      filterByFormula: `{id} = \"${userId}\"`
    })
    .all()
    .then(([record]) => record.fields)
    .catch(console.log);
};
// add user (database id/name/email) to adminBase

const addUser = user => {
  return adminBase("users")
    .create({
      id: user.id,
      name: user.name,
      email: user.email,
      dob: user.dob,
      ethnicity: user.ethnicity,
      gender: user.gender,
      sexuality: user.sexuality,
      postcode: user.postcode
    })
    .then(() => user.id)
    .catch(console.log);
};

// get user appointments from adminBase

const getUserAppointments = user_id => {
  return adminBase("appointments")
    .select({
      filterByFormula: `{user_id} = \"${user_id}\"`,
      fields: ["mentor_id", "chat_string", "date_and_time"]
    })
    .all()
    .then(records => records.map(record => record.fields))
    .catch(console.log);
};

// add extra details to user appointments for rendering on profile page

const addMentorDetailsToAppointments = userApptObj => {
  return Promise.all(
    userApptObj.map(appt => {
      return adminBase("mentors")
        .find([appt.mentor_id])
        .then(record => {
          appt.mentor_name = record.fields.name;
          appt.mentor_img_url = record.fields.img_url;
          return appt;
        });
    })
  ).catch(console.log);
};

// gets record id of an appointment using the chat_string

const getApptRecordId = chat_string => {
  return adminBase("appointments")
    .select({
      filterByFormula: `{chat_string} = \"${chat_string}\"`
    })
    .all()
    .then(([record]) => record.id)
    .catch(console.log);
};

// deletes appointment specified by the id from the appointments table

const deleteAppointment = id => {
  return adminBase("appointments")
    .destroy(id)
    .catch(console.log);
};

module.exports = {
  filterAvailabilities,
  addUser,
  getMentors,
  getUserAppointments,
  addMentorDetailsToAppointments,
  addAppointment,
  getExtraUserInformation,
  getEmailDetails,
  getApptRecordId,
  deleteAppointment,
  getUserRecordId,
  updateAdminMentors
};
