const express = require("express");
const router = express.Router();
const productModel = require("./../userform/product");
const db = require("./../database/productDB");

router.post("/create", (req, res) => {
    console.log(req.body)
    const products = new productModel(req.body.product, req.body.price, req.body.category);
    db.saveUser(products);
    res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
    const products = new productModel(req.body.product, req.body.price, req.body.category);
    db.deleteUser(products);
    res.status(200).send(true);
});

module.exports = router;