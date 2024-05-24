const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
const productController = require("../controllers/productController");

//Create a new Product
router.post("/",authenticateToken,productController.createProduct);

//GET All products
router.get("/", authenticateToken, productController.getAllProducts);

//GET Ctegories on searching
router.get("/search", authenticateToken, productController.searchProducts);

//UPDATE Product
router.put("/:id", authenticateToken, productController.updateProduct);

// //DELETE Product
router.delete("/:id", authenticateToken, productController.deleteProduct);

module.exports = router;