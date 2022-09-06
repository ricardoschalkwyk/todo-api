const express = require("express");

// All the controllers are imported to be used for the endpoints

const user = require("./user/user.controller");

const todo = require("./todo/todo.controller");

const auth = require("./auth/auth.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/user", user);

router.use("/todos", todo);

router.use("/auth", auth);

module.exports = router;
