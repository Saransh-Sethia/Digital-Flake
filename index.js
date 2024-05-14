require('dotenv').config({path: 'src/.env'});
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const authRoutes = require("./src/routes/authRoutes")
const categoryRoutes = require("./src/routes/categoryRoutes");
const productRoutes = require("./src/routes/productRoutes")

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

//Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));



app.get('/',(req,res)=>{
    res.send("Backend Server is running")
});


app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})