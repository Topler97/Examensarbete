import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import News from "../../../lib/models/NewsSchema";

export async function GET() {
  try {
    await connectDB();

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
