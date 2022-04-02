const express = require('express'); 
const { Router } = require('express');
const router = express.Router();

const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('../middlewares/verifyToken');

const { 
    createOrder, 
    updateOrder, 
    deleteOrder, 
    getUserOrders, 
    getAllOrders,
    getMonthlyIncome 
} = require('../controllers/orderController');


router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/userorders/:userId", verifyTokenAndAuthorization, getUserOrders);
router.get("/", verifyTokenAndAdmin, getAllOrders); 
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome); 

module.exports = router;

