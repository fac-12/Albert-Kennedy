// checks if the date of the appointment is tomorrow

const isAppointmentTomorrow = date => {
  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
  const apptDate = new Date(date);
  return apptDate.getDate() === tomorrowDate.getDate();
};

module.exports = { isAppointmentTomorrow };
