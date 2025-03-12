import express from "express";
import { Recipes } from "../models/RecipeSchema.js";

const router = express.Router();

// 🔹 Hämta alla recept
router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Något gick fel vid hämtning av recept" });
  }
});

// 🔹 Hämta ett specifikt recept med `_id`
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

// 🔹 Skapa ett nytt recept
router.post("/recipes", async (req, res) => {
  try {
    const recipe = new Recipes(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Radera ett recept med `_id`
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

export default router; // Exportera Express-routes

// import express from "express";
// import { Recipes } from "../models/RecipeSchema.js";

// const router = express.Router();

// // Hämta alla recept
// router.get("/recipes", async (req, res) => {
//   try {
//     const recipes = await Recipes.find();
//     res.status(200).json(recipes);
//   } catch (error) {
//     res.status(500).json({ error: "Något gick fel vid hämtning av recept" });
//   }
// });

// // Skapa ett nytt recept
// router.post("/recipes", async (req, res) => {
//   try {
//     const recipe = new Recipes(req.body);
//     await recipe.save();
//     res.status(201).json(recipe);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // 🗑️ Radera ett recept med ID
// router.delete("/recipes/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedRecipe = await Recipes.findByIdAndDelete(id);

//     if (!deletedRecipe) {
//       return res.status(404).json({ message: "Receptet hittades inte" });
//     }

//     res.status(200).json({ message: "Receptet har raderats" });
//   } catch (error) {
//     res.status(500).json({ error: "Något gick fel vid radering av recept" });
//   }
// });

// export default router; // Exportera Express-routes
