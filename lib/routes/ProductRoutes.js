
import { Products } from "../models/ProductSchema.js";

export async function createProduct(req) {
  try {
    const { category, title, description, country, sort } = req.body;

    const newProduct = new Products({
      category,  
      title,
      description,
      country,
      sort,
    });

    await newProduct.save();

    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}