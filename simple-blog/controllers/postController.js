import posts from "../data/posts.js";

// GET /posts
export const getAllPosts = (req, res) => {
  res.render("index", { posts });
};

// GET /posts/:id
export const getPostById = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.send("Post not found");
  }

  res.render("post", { post });
};

// GET /posts/new
export const showNewPostForm = (req, res) => {
  res.render("new");
};

// POST /posts
export const createPost = (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);
  res.redirect("/posts");
};