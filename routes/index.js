const express = require("express");
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/welcome", forwardAuthenticated, (
  req,
  res //Changes made: / -> /welcome/ res.sendFile("welcome.ejs", { root: path.join(__dirname, "./views") })
) => res.render("welcome"));

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    user: req.user,
  })
);

module.exports = router;
