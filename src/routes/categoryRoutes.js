const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
const categoryController = require("../controllers/categoryController");

//Create a new category
router.post("/", authenticateToken, categoryController.createCategory);

//GET all tasks for Logged in users
router.get("/", authenticateToken, categoryController.getAllCategories);

//UPDATE a task by ID
router.put("/:id", authenticateToken, categoryController.updateCategory);

//DELETE a task
router.delete("/:id", authenticateToken, categoryController.deleteCategory)

module.exports = router;