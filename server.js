import express from "express";
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
import ProductRoutes from "./lib/routes/ProductRoutes.js";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
const port = process.env.PORT || 3000

app.use('/', ProductRoutes);

app.listen(port, () => {
    console.log(`listen to ${port}`)
})