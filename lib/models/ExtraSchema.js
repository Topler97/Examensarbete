// Denna används inte, men ligger kvar i databasen
import mongoose from "mongoose";

const ExtraSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

const Extra = mongoose.models.extras || mongoose.model("Extra", ExtraSchema);

export default Extra;
