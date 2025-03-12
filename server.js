import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
//import { createProduct } from "./lib/routes/ProductRoutes.js";
import RecipeRoute from "./lib/route/RecipeRoute.js"; // Rätt import
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
const port = process.env.PORT || 3000;

//app.use("/", createProduct);
app.use("/", RecipeRoute);

app.listen(port, () => {
  console.log(`listen to ${port}`);
});
