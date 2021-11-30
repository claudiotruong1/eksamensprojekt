const express = require("express");
const url = require('url');
const router = express.Router();
const productModel = require("./../userform/product");
const db = require("./../database/productDB");
const { updateProduct } = require("./../database/productDB");
// const fs = require('fs')


router.post("/create", (req, res) => {
    console.log(req.body)
    const products = new productModel(req.body.id, req.body.product, req.body.price, req.body.category, req.body.picture);
    db.saveProduct(products);
    res.status(200).send(true);
});

router.delete("/delete", (req, res) => {
    //const products = new productModel(req.body.product, req.body.price, req.body.category, req.body.picture);
    db.deleteProduct(products);
    res.status(200).send(true);
});

router.get("/update", (req, res) => {
  // const qstring = url.parse(req.url, true).query;
   const product = new productModel(req.body.id, req.body.product, req.body.price, req.body.category, req.body.picture);

 //  db.updateProduct(product);
   res.status(200).send(true)
});

// jeg tilføjer blot kategori til stien - fjern /:category hvis det ikke fungerer.

router.get("/getAllProducts", (req, res) => {
   //  const {category} = req.params;
    const allProducts = db.getProducts()
    res.status(200).send(allProducts);
})
    
module.exports = router;