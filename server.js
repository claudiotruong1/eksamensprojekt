const express = require("express");
const app = express();



const userController = require("./src/routes/user-route");
const userController2 = require("./src/routes/product-route");

const PORT = process.env.PORT || 7000;

app.use(express.static("./src/views"));

app.use(express.json());


app.use("/users", userController);
app.use("/products", userController2);

app.listen(PORT, console.log(`Serveren lytter på port ${PORT}`));

module.exports = app;