const express = require('express');
const { Router } = require('express');
const router = express.Router();

const { verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const { 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getOneProduct, 
    getAllProducts 
} = require('../controllers/productController');


router.post("/",verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct); 
router.delete("/:id", verifyTokenAndAdmin, deleteProduct); 
router.get("/:id", getOneProduct);
router.get("/", getAllProducts);


module.exports = router;
