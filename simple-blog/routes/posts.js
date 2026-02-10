import express from "express";
import {
  getAllPosts,
  getPostById,
  showNewPostForm,
  createPost
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/new", showNewPostForm);
router.get("/:id", getPostById);
router.post("/", createPost);

export default router;
