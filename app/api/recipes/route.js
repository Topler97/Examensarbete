import { connectDB } from '../../../lib/db.js';
import RecipeSchema from '../../../lib/models/RecipeSchema.js';

// Connectar med databasen & hämtar alla recept
export async function GET() {
  await connectDB();
  const recipes = await RecipeSchema.find();
  return Response.json(recipes);
}