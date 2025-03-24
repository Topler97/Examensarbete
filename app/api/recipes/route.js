import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Recipes from "../../../lib/models/RecipeSchema";

export async function GET() {
  try {
    await connectDB();

    const recipes = await Recipes.find({});
    return NextResponse.json(recipes, { status: 200 });
  } catch (error) {
    console.error("Misslyckades att hämta recepten:", error);
    return NextResponse.json(
      { error: "Misslyckades att hämta recepten" },
      { status: 500 }
    );
  }
}
