const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    category:{
        type:String,
        required: true,
        enum:["Milk","Fruits"],
        default:"Milk"
    },
    name:{
        type:String,
        required: true,
    },
    quantity:{
        type:String,
        required: true,
    },
    price:{
        type:Number,
        required:true
    },
    image : {
        data: Buffer,
        contentType: String
    },
    status: {
        type:String,
        required:true,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, 
{
    timestamps: true
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;