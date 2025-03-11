import mongoose, {model, models, Schema} from "mongoose";

const RecipeSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructions: { type: String, required: true }
})

export const Recipes = models.Recipes || model('Recipes', RecipeSchema);