import { connectDB } from "../../../../lib/db";
import { NextResponse } from "next/server";
import Recipes from '../../../../lib/models/RecipeSchema'

export async function GET(req, { params }) {
  await connectDB();
  try {
    const recipes = await Recipes.findById(params.id);

    if (!recipes) {
      return NextResponse.json(
        { error: "Recept hittades inte" },
        { status: 404 }
      );
    }

    console.log("✅ Hittad recept:", recipes);
    return NextResponse.json(recipes, { status: 200 });
  } catch (error) {
    console.error("❌ Fel vid hämtning av recept:", error);
    return NextResponse.json({ error: "Serverfel" }, { status: 500 });
  }
}