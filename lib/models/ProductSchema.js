import mongoose from 'mongoose';
const { model, models, Schema } = mongoose;

const ProductSchema = new Schema({
    category: { type: String, required: true },
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String },
    sort: { type: String },
    button: { type: Boolean, default: false }
})

export const Products = models.Products || model('Products', ProductSchema);