import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const url = new URL(req.url); // Hämta URL från begäran
    const id = url.pathname.split("/")[3]; // Extrahera ID från URL-path

    console.log(`🔍 Hämtar nyhet med ID: ${id}`);

    const res = await fetch(`http://localhost:3000/news/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Misslyckades att hämta nyhet, status: ${res.status}`);
    }

    const news = await res.json();
    return NextResponse.json(news, { status: 200 });
  } catch (error) {
    console.error("❌ Fel vid hämtning av nyhet:", error);
    return NextResponse.json(
      { error: "Misslyckades att hämta nyhet" },
      { status: 500 }
    );
  }
}
