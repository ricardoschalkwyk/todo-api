const express = require("express");
const { auth } = require("../../middlewares");
const todoService = require("./todo.service");

const router = express.Router();

// GET request
// The auth function is called here for verifying the token on get requests
router.get("/", auth, async (req, res, next) => {
  try {
    // Inside this try I'm trying to find a certain users todos
    const { sub } = req.user;

    // By using the userId i can findAll of the users todos
    const data = await todoService.findAll({ userId: sub });

    res.json(data);
  } catch (error) {
    next(error);
  }
});

// POST request
router.post("/", auth, async (req, res) => {
  // Again sub is used for the userId
  const { sub } = req.user;

  // Data is created from an input field on the front-end
  // Then userId is added to that created data
  const data = await todoService.create({
    ...req.body,
    userId: sub,
  });

  if (data.length === 0) {
    res.status(404).json({
      message: "Could not create todo",
    });
  }

  res.json(data);
});

// DELETE request
router.delete("/:id", async (req, res) => {
  // Removes data detemined by the todo id
  const data = await todoService.remove(req.params.id);

  if (!data) {
    res.status(404).json({
      message: "Could not find todo",
    });
  }

  res.json(data);
});

module.exports = router;
