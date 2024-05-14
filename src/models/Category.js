const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, 
{
    timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;