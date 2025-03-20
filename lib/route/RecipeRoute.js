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

// Hämta ett specifikt recept med id
router.get("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipes.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Receptet hittades inte" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ error: "Något gick fel vid hämtning av receptet" });
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

// Ta bort ett recept med id
router.delete("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipes.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Receptet hittades inte" });
    }

    res.status(200).json({ message: "Receptet har raderats" });
  } catch (error) {
    res.status(500).json({ error: "Något gick fel vid radering av recept" });
  }
});

// Lägger till kategorin: "Drinks" till alla recept
router.put("/recipes/update-categories", async (req, res) => {
  try {
    await Recipes.updateMany({}, { category: "Drinks" });

    res.status(200).json({ message: "Successfull!" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Ändra ett specifikt recept
router.put("/recipes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        // Hitta produkten med det angivna id och uppdatera den
        const updatedRecipe = await Recipes.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }
        
        return res.status(200).json(updatedRecipe);

    } catch(error) {
        console.error('Error:', error);
        return res.status(500).json({ error: error.message });
    }
})

// Lägg till imgUrl
router.put('/recipes', async (req, res) => {
  try {
      const { imgUrl } = req.body;

      if (!imgUrl) {
          return res.status(400).json({ error: 'imgUrl is required' });
      }

      // Uppdatera alla recept och sätt den nya imgUrl
      const updatedRecipes = await Recipes.updateMany(
        { $set: { imgUrl: imgUrl } }
      );

      if (updatedRecipes.matchedCount === 0) {
          return res.status(404).json({ error: 'No recipes found to update' });
      }

      return res.status(200).json(updatedRecipes);

  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: error.message });
  }
});

export default router;
