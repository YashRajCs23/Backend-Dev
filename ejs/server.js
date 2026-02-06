import express from "express";

// Method override – HTML forms se PUT & DELETE allow karne ke liye
import methodOverride from "method-override";
import userRoutes from "./router/userRoute.js";
import pageRoutes from "./router/pages.js";

const app = express();

// EJS ko template engine set kar rahe hain
app.set("view engine", "ejs");

// Form data ko read karne ke liye (req.body)
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use("/", pageRoutes);
app.use("/", userRoutes);

// Agar koi bhi route match nahi hua

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// server.js → sirf app setup karta hai
// business logic → routes folder me hota hai
// EJS → Server Side Rendering (SSR)
// CSR → React / Vue