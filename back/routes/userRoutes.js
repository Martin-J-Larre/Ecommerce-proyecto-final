const express = require('express');
const { Router } = require('express');
const router = express.Router();

const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('../middlewares/verifyToken');

const { 
    updateUser, 
    deleteUser, 
    getOneUser, 
    getAllUsers,
    getUserStats 
} = require('../controllers/userController');


router.put('/:id', verifyTokenAndAuthorization, updateUser);
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);
router.get('/getone/:id', verifyTokenAndAdmin, getOneUser);
router.get('/', verifyTokenAndAdmin, getAllUsers);
router.get('/stats', verifyTokenAndAdmin, getUserStats);


module.exports = router;
