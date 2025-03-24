import { connectDB } from "../../../../lib/db";
import Recipes from "../../../../lib/models/RecipeSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  console.log("📌 Params i API:", params);

  try {
    const recipes = await Recipes.findById(params.id);

    if (!recipes) {
      return NextResponse.json(
        { error: "receptet hittades inte" },
        { status: 404 }
      );
    }

    console.log("✅ Hittat recept:", recipes);
    return NextResponse.json(recipes, { status: 200 });
  } catch (error) {
    console.error("❌ Fel vid hämtning av recept:", error);
    return NextResponse.json({ error: "Serverfel" }, { status: 500 });
  }
}
