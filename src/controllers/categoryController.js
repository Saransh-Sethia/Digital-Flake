const Category = require("../models/Category");
const categoryService = require("../services/categoryService");

const createCategory = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const userId = req.user.id;
    console.log("userId", userId);

    const category = await categoryService.createCategory({
      title,
      description,
      status,
      userId,
    });

    console.log("Category Created", category);

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const userId = req.user.id;
    const categories = await categoryService.getAllCategories(userId);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchCategory = async (req, res) => {
  try {
    const query = req.query
    const categories = await categoryService.searchCategory(query);
    res.status(200).json(categories);
    console.log(categories)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const updatedData = req.body;
    const category = await categoryService.updateCategory(
      id,
      userId,
      updatedData
    );
    if (!category) {
      return res.status(404).json({ message: "Category not Found" }); //NOT Found
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const success = await categoryService.deleteCategory(id, userId);

    if (!success) {
      res.status(404).json({ message: "Task not Found" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  searchCategory,
};
