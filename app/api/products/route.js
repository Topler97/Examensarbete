import { connectDB } from "../../../lib/db.js";
import ProductSchema from "../../../lib/models/ProductSchema.js";

// Hanterar GET-förfrågningar och filtrerar produkter baserat på kategori
export async function GET(req) {
  await connectDB();

  // Hämta kategori från query-parametrarna i URL:en
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  let products;

  if (category) {
    products = await ProductSchema.find({ category: category });
  } else {
    products = await ProductSchema.find();
  }

  return Response.json(products);
}
