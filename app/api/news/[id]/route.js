import { connectDB } from "../../../../lib/db";
import News from "../../../../lib/models/NewsSchema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

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
