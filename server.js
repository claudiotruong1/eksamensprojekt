const express = require("express");
const app = express();

const userController = require("./src/routes/user-route");

const PORT = process.env.PORT || 5000;

app.use(express.static("./src/views"));

app.use(express.json());


app.use("/users", userController);

app.listen(PORT, console.log(`Serveren lytter på port ${PORT}`));