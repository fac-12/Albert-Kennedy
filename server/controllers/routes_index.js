const router = require("express").Router();
const { signUp } = require("./auth");

router.post("/signup", signUp);

module.exports = router;
