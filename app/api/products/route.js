import { connectDB } from '../../../lib/db.js';
import ProductSchema from '../../../lib/models/ProductSchema.js';

export async function GET() {
  await connectDB();
  const products = await ProductSchema.find();
  return Response.json(products);
}