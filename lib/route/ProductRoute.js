import { Products } from "../models/ProductSchema.js";
import express from "express";

const router = express.Router();

router.post('/product', async (req, res) => {
    try {
        const { category, title, description, country, sort, imgUrl, button } = req.body;
    
        const newProduct = new Products({
          category,
          imgUrl,
          title,
          description,
          country,
          sort,
          button,
        });
    
        await newProduct.save();
    
        return new Response(JSON.stringify(newProduct), { status: 201 });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
})

router.get('/products', async (req, res) => {
    try {
        const products = await Products.find();
        return res.status(200).json(products);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: error.message });
    }
})

router.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product_id = await Products.findById(id);

        if(!product_id) {
            return res.status(404).json({message: "that ID dosen't match amy products"})
        }

        return res.status(200).json(product_id);

    } catch(error) {
        console.error('Error:', error);
        return res.status(500).json({ error: error.message });
    }
})

export default router;