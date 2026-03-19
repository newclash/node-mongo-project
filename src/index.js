import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./utils/errorHandler.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Error Handler
app.use(errorHandler);

// Start server
const startServer = async () => {
  // Connect DB
  await connectDB();

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
};

startServer();
