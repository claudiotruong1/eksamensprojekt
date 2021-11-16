// imports
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// opgaven

const PORT = 8001;
app.listen(PORT, () => {
    console.log(`Serveren lytter på port ${PORT}`)
});


// opret bruger 

let users = [];

app.post('/opret_bruger', (req, res) => {
    const newUser = {
        id: users.lenght + 1,
        name: req.body.name,
        password: req.body.password
    }
    users.push(newUser)
    res.status(201).json(users);
});

// opret produkt

let products = [];

app.post('/opret_produkt', (req,res) => {
    const newProduct = {
        id: products.length + 1,
        category: req.body.category,
        price: req.body.price
    }
    products.push(newProduct);
    res.status(201).json(products)
});



