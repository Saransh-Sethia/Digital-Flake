const Category = require("../models/Category");

const createCategory = async (categoryData) => {
  try {
    const category = await Category.create(categoryData);

    return category;
  } catch (error) {
    throw error;
  }
};

const getAllCategories = async (userId) => {
  try {
    const categories = await Category.find({ userId: userId });
    return categories;
  } catch (error) {
    throw error;
  }
};

const searchCategory = async (query) => {
  try {
    const categories = await Category.find(query);
    return categories;
  } catch (error) {
    throw error;
  }
};

const updateCategory = async (categoryId, userId, updatedData) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: categoryId, userId: userId },
      { $set: updatedData },
      { new: true }
    );
    return category;
  } catch (error) {
    throw error;
  }
};

const deleteCategory = async (categoryId, userId) => {
  try {
    const category = await Category.findOneAndDelete({
      _id: categoryId,
      userId: userId,
    });
    return category;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  searchCategory,
};
