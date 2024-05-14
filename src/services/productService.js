const Product = require("../models/Product");

const createProduct = async (productData) => {
  try {
    const category = await Product.create(productData);
    return category;
  } catch (error) {
    throw error;
  }
};

const getAllProducts = async (userId) => {
  try {
    const products = await Product.find({ userId: userId });
    return products;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async(productId, userId, updatedData) => {
    try{
        const product = await Product.findOneAndUpdate(
            {_id: productId, userId: userId},
            {$set: updatedData},
            {new: true}
            );
            return product;
    } catch(error){
        throw error;
    }
};

const deleteProduct = async(productId, userId) => {
    try{
        const product = await Product.findOneAndDelete({
            _id: productId, userId: userId
          });
          return product;
    } catch(error){
        throw error
    }
}

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct };
