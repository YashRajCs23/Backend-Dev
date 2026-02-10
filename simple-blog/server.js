import express from "express";
import postRoutes from "./routes/posts.js";

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.use(express.static("public"));
// routes
app.use("/posts", postRoutes);

// default route
app.get("/", (req, res) => {
  res.redirect("/posts");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});