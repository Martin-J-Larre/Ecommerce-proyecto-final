const router = require("express").Router();

const {
    getCommYrating,
    addCommYrating,
    deleteCommYrating,
    editCommYrating,
} = require("../controllers/commentsratingsController");

router.get("/find/:productid", getCommYrating);
router.post("/addcommentrating", addCommYrating);
router.delete("/deletecommentrating/:id", deleteCommYrating);
router.put("/editcommentrating/:id", editCommYrating);

module.exports = router;
