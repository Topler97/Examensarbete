import express from "express";
import { Recipes } from "../models/RecipeSchema.js";

const router = express.Router();

// Hämta alla recept
router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Något gick fel vid hämtning av recept" });
  }
});

// Skapa ett nytt recept
router.post("/recipes", async (req, res) => {
  try {
    const recipe = new Recipes(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router; // Exportera Express-routes
