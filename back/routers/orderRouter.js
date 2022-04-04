const router = require("express").Router();

const { createOrder, updateOrder, deleteOrder, getAllOrders, getMonthyIncome, getUserOrder } = require("../controllers/orderController");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");


router.post("/", createOrder);
router.put("/:id", verifyTokenAndAuthorization, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/find/:userId", getUserOrder);
router.get("/", getAllOrders);
router.get("/income", verifyTokenAndAdmin, getMonthyIncome);

module.exports = router;
