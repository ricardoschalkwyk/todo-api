const express = require("express");

const userService = require("./user.service");

const router = express.Router();

// POST request
router.post("/create", async (req, res) => {
  // Data is gathered from what ever is type in req.body
  const data = await userService.create(req.body);

  if (data.length === 0) {
    res.status(404).json({
      message: "Could not find data",
    });
  }

  res.json(data);
});

// POST request
router.post("/verify", async (req, res) => {
  // This post request wil verify whether a user with
  // the entered email and password actually exists
  try {
    const verified = await userService.verify({
      email: req.body.email,
      password: req.body.password,
    });

    res.json({ verified });
  } catch (error) {
    console.log(error, { message: "Please enter correct email and password" });
  }
});

module.exports = router;
