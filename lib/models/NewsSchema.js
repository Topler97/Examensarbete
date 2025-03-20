import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    category: { type: String, required: true },
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    button: { type: Boolean, default: false }
});

const News = mongoose.models.News || mongoose.model('News', NewsSchema);

export default News;