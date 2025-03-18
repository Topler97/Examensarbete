
import express from 'express';
import { News } from '../models/NewsSchema.js';

const router = express();

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

export default router;