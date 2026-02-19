import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import employeeRoutes from "./routes/employeeRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./middleware/logger.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();

app.use(logger);
app.use(express.json());                            
app.use(express.urlencoded({ extended: true }));  

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 

app.use(express.static(path.join(__dirname, "public")));

app.use("/employees", employeeRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/employees`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));