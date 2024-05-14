const productService = require("../services/productService");

const createProduct = async (req, res) => {
  try {
    const { category, name, quantity, price, status } = req.body;

    const userId = req.user.id;

    const product = await productService.createProduct({
      category,
      name,
      quantity,
      price,
      status,
      userId,
    });

    console.log("Product Created", product);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const userId = req.user.id;

    const products = await productService.getAllProducts(userId);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ messsage: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const userId = req.user.id;
    const updatedData = req.body;

    const product = await productService.updateProduct(id, userId, updatedData);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found!" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async(req,res) => {
    try{
        const {id} = req.params;
        const userId = req.user.id;
    
        const success = await productService.deleteProduct(id, userId);
    
        if(!success){
            res.status(404).json({message: "Task not Found"})
        }
    
        res.status(204).send();
    } catch(error){
        res.status(500).json({message: error.message})
    }
}
module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct };
