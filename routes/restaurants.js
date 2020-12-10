const express = require("express");
const router = express.Router();
const { forwardAuthenticated } = require("../config/auth");

// const restDB = require("../config/keys").restURI;

// mongoose
//   .connect(restDB, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Restaurant DB connected"))
//   .catch((err) => console.log(err));

let restaurants = [];

router.post("/add_restaurant", (req, res) => {
  if (!req.body) {
    res.send("Error getting information");
  } else {
    const newRestaurant = req.body;
    restaurants.push(newRestaurant);
    console.log(restaurants);
    res.send(restaurants);
  }
});

router.delete("/delete", forwardAuthenticated, (req, res) => {
  if (restaurants.length === 0) {
    res.send("Nothing to delete");
    return;
  } else {
    const newRestaurant = req.body;
    if (restaurants.find(newRestaurant)) {
      restaurants.pop(newRestaurant);
      res.send(restaurants);
    } else {
      res.send("Restauarant to be deleted was not found in the stack list");
    }
  }
});

module.exports = router;
