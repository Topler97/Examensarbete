import { connectDB } from '../../../lib/db.js';
import NewsSchema from '../../../lib/models/NewsSchema.js';

// Connectar med databasen & hämtar alla nyheter
export async function GET() {
  await connectDB();
  const news = await NewsSchema.find();
  return Response.json(news);
}