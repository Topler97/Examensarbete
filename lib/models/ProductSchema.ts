import mongoose, {model, models, Schema} from "mongoose";

const ProductSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    country: { type: String, required: true },
    sort: { type: String, required: true }
})

export const Products = models.Products || model('Products', ProductSchema);