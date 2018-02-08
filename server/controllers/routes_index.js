const router = require("express").Router();
const passport = require("passport");
const passportService = require("../services/passport");
const { signUp, signIn } = require("./auth");

const requireSignin = passport.authenticate("local", { session: false });

router.post("/signup", signUp);
router.post("/signin", requireSignin, signIn);

module.exports = router;
