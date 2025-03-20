import { connectDB } from '../../../lib/db.js';
import RecipeSchema from '../../../lib/models/RecipeSchema.js';

export async function GET() {
  await connectDB();
  const recipes = await RecipeSchema.find();
  console.log(recipes, 'recept')
  return Response.json(recipes);
}