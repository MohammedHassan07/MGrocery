import { Schema, model, Types } from "mongoose";

const productSchema = new Schema({

    name: {

        type: String,
        required: true
    },

    category: {
        type: Types.ObjectId,
        required: true,
        ref: 'category'
    },

    brand: {
        type: Types.ObjectId,
        required: true,
        ref: 'brand'
    },

    // e.g., kg, liter, pieces
    unit: {
        type: String
    },

    cost_price: { type: Number },

    selling_price: { type: Number },

    low_stock_alert: { type: Number },

    quantity_in_stock: {

        type: Number,
        required: true
    },

    barcode: {
        type: String
    }

}, { timestamps: true })


export default model('product', productSchema)