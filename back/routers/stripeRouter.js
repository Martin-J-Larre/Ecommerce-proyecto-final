const router = require("express").Router();

const { createapayment } = require("../controllers/stripeController");

router.post("/payment", createapayment);

module.exports = router;
