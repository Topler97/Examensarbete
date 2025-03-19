
import express from 'express';
import { News } from '../models/NewsSchema.js';

const router = express();

// Skapa en ny nyhet i databasen
router.post('/new', async (req, res) => {
    try {
        const { title, description, imgUrl, category } = req.body;

        const newNew = new News({
            category,  
            title,
            description,
            imgUrl
        });

        await newNew.save();
        return res.status(201).json(newNew);

    } catch(error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
})

// Hämta alla nyheter
router.get("/news", async (req, res) => {
    try {
        const news = await News.find();
        return res.status(200).json(news);

    } catch(error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
})

// Hämta en specifik nyhet med id
router.get('/news/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const news_id = await News.findById(id);

        if(!news_id) {
            return res.status(404).json({message: "that ID dosen't match any news"})
        }

        return res.status(200).json(news_id);
    
    } catch(error) {
        console.error('Error:', error);
        return res.status(500).json({ error: error.message });
    }
})

// Ändra en specifik nyhet med id
router.put('/news/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        // Hitta produkten med det angivna id och uppdatera den
        const updatedNew = await News.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedNew) {
            return res.status(404).json({ error: 'News not found' });
        }
        
        return res.status(200).json(updatedNew);

    } catch(error) {
        console.error('Error:', error);
        return res.status(500).json({ error: error.message });
    }
})

export default router;