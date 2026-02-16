import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employeeRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./middleware/logger.js";

dotenv.config();

const app = express();
app.use(logger);
app.use(express.json());
app.use(errorHandler);

app.use("/api/employees", employeeRoutes);


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});