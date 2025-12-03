const express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller");
const { authBearer } = require("../middlewares/auth.middleware");

// Public
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

// Protected
router.post("/", authBearer, productController.createProduct);
router.put("/:id", authBearer, productController.updateProduct);
router.delete("/:id", authBearer, productController.deleteProduct);

module.exports = router;
