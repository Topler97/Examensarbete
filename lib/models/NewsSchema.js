import mongoose from 'mongoose';
const { model, models, Schema } = mongoose;

const NewsSchema = new Schema({
    category: { type: String, required: true },
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

export const News = models.News || model('News', NewsSchema);