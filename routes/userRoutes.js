const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create new user
// Create new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      UserId: generateUserId(),   
      ...req.body                 
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// create userid
function generateUserId() {
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `ASATI-${random}`;
}

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Delete user
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
