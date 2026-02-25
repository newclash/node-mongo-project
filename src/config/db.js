import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "dev",
    });

    console.log("✔ MongoDB connected successfully");
    console.log("Connected DB:", mongoose.connection.name);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
