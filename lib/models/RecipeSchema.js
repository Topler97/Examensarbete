import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  category: { type: String, required: false },
});

export const Recipes = models.Recipes || model("Recipes", RecipeSchema);
