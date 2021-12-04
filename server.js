// Vi indhenter express
const express = require("express");
const app = express();

// Controllers
const userController = require("./src/routes/user-route");
const userController2 = require("./src/routes/product-route");

// Der laves en port
const PORT = process.env.PORT || 7000;

// Middleware -> det der sker før vi kører noget i vores controllers
app.use(express.static("./src/views"));

// Middleware -> den kompenserer "tekstrenge" til json objekter
app.use(express.json());

// Bruger og vare routes
app.use("/users", userController);
app.use("/products", userController2);

// Vi lytter til vores hjemmeside på porten, samt laver en callback function.
app.listen(PORT, console.log(`Serveren lytter på port ${PORT}`));

module.exports = app;
