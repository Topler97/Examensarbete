import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db"; // ✅ Importera rätt namn
import News from "../../../lib/models/NewsSchema"; // Se till att modellen importeras rätt

// Hämta alla nyheter
export async function GET() {
  try {
    await connectDB(); // ✅ Se till att databasen är ansluten

    const news = await News.find({});
    return NextResponse.json(news, { status: 200 });
  } catch (error) {
    console.error("Misslyckades att hämta nyheter:", error);
    return NextResponse.json(
      { error: "Misslyckades att hämta nyheter" },
      { status: 500 }
    );
  }
}
