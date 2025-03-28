import mongoose from "mongoose";

// Anslut till MongoDB
export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error("Kunde inte ansluta till databasen");
  }
};
