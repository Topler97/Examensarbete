import mongoose from "mongoose";

const { model, models, Schema } = mongoose;

const ExtraSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Extra = models.extras || model("Extra", ExtraSchema);
