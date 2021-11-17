const express = require('express');
const router = express.Router();
const userModel = require("./../userDesign/user");
const db = require("./../databaseFolder/database.js");
const database = require('../databaseFolder/database');

// opret bruger
router.post('/opret_bruger', (req, res) => {
   const user = new userModel(req.body.email, req.body.password);
   database.savedUser(user);
   res.status(200).send(true);
});

// slet bruger
router.delete('/slet_bruger', (req, res) => {
    const user = new userModel(req.body.email, req.body.password);
    database.deleteUser(user);
    res.status(200).send(true);
 });

// login 
 router.post('/bruger_login', (req, res) => {
    const user = new userModel(req.body.email, req.body.password);
    const found = database.findUser(user)
    res.status(200).send(true);

if (found) {
    if (user.password == found.password) {
        res.status(200).send(true);
    } else {
        res.status(404).send(false);
    }
} else {
    res.status(401).send(false);
}
});

module.exports = router;


