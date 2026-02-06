import express from "express";
const router = express.Router();
let userData = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Mike Johnson", age: 35 },
];

router.get("/user", (req, res) => {
  res.render("user", { userData });
});


router.get("/editpage/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userData.find(u => u.id === userId);

  if (!user) {
    return res.status(404).render("404");
  }

  res.render("edit", { userData: [user] });
});

// add user
router.post("/api/user", (req, res) => {
  const { name, age } = req.body;

  const newUser = {
    id: userData.length + 1,
    name,
    age
  };

  userData.push(newUser);
  res.redirect("/user");
});

// update user
router.put("/api/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userData.find(u => u.id === userId);

  if (!user) {
    return res.status(404).render("404");
  }

  user.name = req.body.name;
  user.age = req.body.age;

  res.redirect("/user");
});

// delete user
router.delete("/api/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const idx = userData.findIndex(u => u.id === userId);

  if (idx === -1) {
    return res.status(404).render("404");
  }

  userData.splice(idx, 1);
  res.redirect("/user");
});

export default router;