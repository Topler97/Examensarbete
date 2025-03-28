import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  category: { type: String, required: false },
});

const Recipes = mongoose.models.Recipes || mongoose.model("Recipes", RecipeSchema);

export default Recipes;