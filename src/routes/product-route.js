const express = require("express");
const url = require('url');
const router = express.Router();
const productModel = require("./../userform/product");
const db = require("./../database/productDB");
const { updateProduct } = require("./../database/productDB");
const { appendFile } = require("fs");
// const fs = require('fs')


router.post("/create", (req, res) => {
    console.log(req.body)
    const products = new productModel(req.body.id, req.body.product, req.body.price, req.body.category, req.body.picture);
    db.saveProduct(products);
    res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
    db.deleteProduct(products);
    res.status(200).send(true);
});

router.post("/update", (req, res) => {
   const product = new productModel(req.body.id, req.body.product, req.body.price, req.body.category, req.body.picture);
   console.log(req.body.category)
    db.updateProduct(product);
   res.status(200).send(true)
});

// jeg tilføjer blot kategori til stien - fjern /:category hvis det ikke fungerer.

router.get("/getAllProducts", (req, res) => {
    const allProducts = db.getProducts()
    res.status(200).send(allProducts);
});

router.get("/showProducts/:category", (req, res) => {
    const { category } = req.params;
    const allMatching = db.getSpecificProducts(category)

    res.status(200).send(allMatching)
});
    
module.exports = router;