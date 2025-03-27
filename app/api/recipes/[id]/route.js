import { connectDB } from "../../../../lib/db";
import Recipes from "../../../../lib/models/RecipeSchema";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  await connectDB();

  const params = await context.params; // ✅ Väntar in `params`

  if (!params?.id) {
    return NextResponse.json({ error: "ID saknas" }, { status: 400 });
  }

  console.log("📌 Params i API:", params.id);

  try {
    const recipes = await Recipes.findById(params.id);

    if (!recipes) {
      return NextResponse.json(
        { error: "Receptet hittades inte" },
        { status: 404 }
      );
    }

    console.log("✅ Hittat recept:", recipes);
    return NextResponse.json(Recipes, { status: 200 });
  } catch (error) {
    console.error("❌ Fel vid hämtning av recept:", error);
    return NextResponse.json({ error: "Serverfel" }, { status: 500 });
  }
}
