const express = require("express");
const router = express.Router();
const userModel = require("../userform/user");
const db = require("../database/db");

router.post("/create", (req, res) => {
  const user = new userModel(req.body.id, req.body.email, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.id, req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});

router.post("/login", (req, res) => {
  const user = new userModel(req.body.id, req.body.email, req.body.password);
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true); // send req.body.id tilbage
    } else {
      res.status(401).send(false);
    }
  } else {
    res.status(404).send(false);
  }
});

router.post("/update", (req, res) => {
  const user = new userModel(req.body.id, req.body.email, req.body.password);
  db.updateUser(user);
  res.status(200).send(true);
});


module.exports = router;
