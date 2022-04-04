const router = require("express").Router();

const {
    createProduct,
    updateProduct,
    deleteProduct,
    getOneProduct,
    getAllProducts,
} = require("../controllers/productController");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/find/:id", getOneProduct);
router.get("/", getAllProducts);

module.exports = router;
