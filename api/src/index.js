const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connection = require("./database.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.listen(PORT, () => {
  connection();
  console.log("Server is listening on port", PORT);
});
