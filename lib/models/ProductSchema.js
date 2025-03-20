import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    category: { type: String, required: true },
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String },
    sort: { type: String },
    button: { type: Boolean, default: false }
})

const Products = mongoose.models.Products || mongoose.model('Products', ProductSchema);

export default Products;