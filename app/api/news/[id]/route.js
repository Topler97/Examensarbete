import { connectDB } from "../../../../lib/db";
import News from "../../../../lib/models/NewsSchema"; // Se till att din Mongoose-model importeras korrekt
import { NextResponse } from "next/server"; // Importera EN gång

export async function GET(req, { params }) {
  await connectDB(); // Koppla till MongoDB

  console.log("📌 Params i API:", params);

  try {
    const news = await News.findById(params.id);

    if (!news) {
      return NextResponse.json(
        { error: "Nyhet hittades inte" },
        { status: 404 }
      );
    }

    console.log("✅ Hittad nyhet:", news);
    return NextResponse.json(news, { status: 200 });
  } catch (error) {
    console.error("❌ Fel vid hämtning av nyhet:", error);
    return NextResponse.json({ error: "Serverfel" }, { status: 500 });
  }
}
