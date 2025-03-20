import { connectDB } from '../../../lib/db.js';
import NewsSchema from '../../../lib/models/NewsSchema.js';

export async function GET() {
  await connectDB();
  const news = await NewsSchema.find();
  console.log(news, 'news')
  return Response.json(news);
}