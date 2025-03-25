import mongoose from "mongoose";

// Anslut till MongoDB
export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Redan ansluten till MongoDB");
    return;
  }

  try {
    console.log("🔗 Ansluter till MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI); // Tar bort deprecated options
    console.log("✅ Ansluten till MongoDB!");
  } catch (error) {
    console.error("❌ MongoDB-anslutning misslyckades:", error);
    throw new Error("Kunde inte ansluta till databasen");
  }
};
