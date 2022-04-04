const router = require("express").Router();

const {
    updateUser,
    deleteUser,
    getOneUser,
    getAllUsers,
    getUserStats,
} = require("../controllers/userController");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getOneUser);
router.get("/", getAllUsers);
router.get("/stats", getUserStats);

module.exports = router;
