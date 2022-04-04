const router = require("express").Router();

const { 
  register, 
  login, 
  checkPass,
  updateUsername,
  updateEmail,
  updatePassword,
  updatePrd,
  newslatterRegister
} = require("../controllers/authController");


router.post("/register", register);
router.post("/login", login);
router.post("/checkpassword", checkPass);
router.put("/updateUsername", updateUsername);
router.put("/updateEmail", updateEmail);
router.put("/updatePassword", updatePassword);
router.put("/updatePrd", updatePrd);
router.post("/newsletterregister", newslatterRegister);


module.exports = router;
