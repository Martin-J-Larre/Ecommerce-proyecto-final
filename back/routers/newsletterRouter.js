const router = require("express").Router();

const { getNewsletters } = require("../controllers/newsletterController");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

router.get("/", getNewsletters);

module.exports = router;
