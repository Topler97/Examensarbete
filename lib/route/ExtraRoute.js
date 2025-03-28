import express from "express";
import { Extra } from "../models/ExtraSchema.js";

const router = express.Router();

// Hämta alla tillbehör
router.get("/extras", async (req, res) => {
  try {
    const extras = await Extra.find();
    res.status(200).json(extras);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Något gick fel vid hämtning av extra-data" });
  }
});

// Skapa ett ny tillbehör
router.post("/extras", async (req, res) => {
  try {
    const extra = new Extra(req.body);
    await extra.save();
    res.status(201).json(extra);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ta bort ett tillbehör-objekt med ID
router.delete("/extras/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExtra = await Extra.findByIdAndDelete(id);

    if (!deletedExtra) {
      return res.status(404).json({ message: "Extra-objektet hittades inte" });
    }

    res.status(200).json({ message: "Extra-objektet har raderats" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Något gick fel vid radering av extra-data" });
  }
});

export default router;

