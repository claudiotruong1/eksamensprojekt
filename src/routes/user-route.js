const express = require("express");
const router = express.Router();
const userModel = require("../userform/user");
const db = require("../database/db"); // vi henter vores db fil

// Et endpoint som kan tilføje en bruger
router.post("/create", (req, res) => {
  const user = new userModel(req.body.id, req.body.email, req.body.password); //vi laver en user variabel, som indeholder vores user objekt, og herefter tilgår vi hhv. id, email og password ved at bruge req.body.xx
  db.saveUser(user); // hver gang vi kører vores post request, bliver vores users gemt
  res.status(200).send(true); // her giver et svar tilbage til brugeren, som sender et request
});

router.delete("/delete", (req, res) => {
  // vi laver et delete endpoint, som befinder sig i en arrow function
  const user = new userModel(req.body.id, req.body.email, req.body.password);
  db.deleteUser(user); // en funktion som blot slette en bruger ud fra email - mere præcist - hvis emailen er den samme slettes brugeren
  res.status(200).send(true); // vi returnerer et svar til brugeren om, at deres request lykkedes
});

// vi laver et post endpoint
router.post("/login", (req, res) => {
  const user = new userModel(req.body.id, req.body.email, req.body.password);
  const found = db.findUser(user); // vi finder vores user
  if (found) {
    if (user.password == found.password) {
      // hvis både user password stemmer overens med den fundne password
      res.status(200).send(true); // så sender vi et status svar tilbage til brugeren om, at de er fundet i systemet
    } else {
      res.status(401).send(false); // hvis ikke password stemmer overens, sender vi en fejlbesked om at brugerens request ikke kan gennemføres
    }
  } else {
    res.status(404).send(false); // hvis ikke brugeren er blevet fundet, forætller vi brugeren at deres request ikke kan findes
  }
});

router.post("/update", (req, res) => {
  const user = new userModel(req.body.id, req.body.email, req.body.password);
  db.updateUser(user);
  res.status(200).send(true);
});

module.exports = router;
