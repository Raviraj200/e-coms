const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter product name"]

    },
    description: {
        type: String,
        required: [true, "please enter product decription"]
    },
    price: {
        type: Number,
        required: [true, "please enter product price"],
        maxLength: [8, "price cannot exced 8 char"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    imges: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
    ],
    category: {
        type: String,
        required: [true, "please enter product category"],

    },
    Stock: {
        type: Number,
        required: [true, "pleace enter product stock"],
        maxLength: [2, "stock cannot exceed 2 char"],
        default: 1

    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        { user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true, 
            },
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            Comment: {
                type: String,
                required: true

            }
        }
    ],

    user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true, 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model("product", productSchema)