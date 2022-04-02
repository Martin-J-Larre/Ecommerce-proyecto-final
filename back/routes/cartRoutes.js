const express = require('express');
const { Router } = require('express');
const router = express.Router();

const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('../middlewares/verifyToken');

const { 
    createCart, 
    updateCart, 
    deleteCart, 
    getUserCart, 
    getAllCarts 
} = require('../controllers/cartController');


router.post("/", verifyToken, createCart); 
router.put("/:id", verifyTokenAndAuthorization, updateCart); 
router.delete("/:id", verifyTokenAndAuthorization, deleteCart); 
router.get("/usercart/:userId", verifyTokenAndAuthorization, getUserCart);
router.get("/", verifyTokenAndAdmin, getAllCarts);

module.exports = router;
