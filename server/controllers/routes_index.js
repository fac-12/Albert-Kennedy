const router = require("express").Router();
const passport = require("passport");
const passportService = require("../services/passport");
const { signUp, signIn, getUser, forgotPassword, resetPassword } = require("./auth");
const { getMentors, getAvailabilities } = require("./mentorAvailabilities");
const { addAppt } = require("./addAppt");
const { profileAppointments, cancelAppointment } = require("./profileAppointments");

const requireSignin = passport.authenticate("local", { session: false });
const requireAuth = passport.authenticate("jwt", { session: false });

router.post("/signup", signUp);
router.post("/signin", requireSignin, signIn);
router.post("/addappt", addAppt);
router.post("/cancelappt", cancelAppointment, profileAppointments);
router.get("/getuser", requireAuth, getUser);
router.get("/getmentordata", getMentors);
router.get("/getavailabilities", getAvailabilities);
router.get("/getappointments", requireAuth, profileAppointments);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword);

module.exports = router;
