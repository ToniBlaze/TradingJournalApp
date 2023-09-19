const moongoose = require("mongoose");
const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require(cors);
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
 
// Models

//Endpoints

//Error Middleware

mongoose
  .connect(process.env.MONGODB_APIKEY)
  .then((res) => {
    app.listen(process.env.PORT, async () =>
      console.log("Server listening on port " + process.env.PORT)
    );
  })
  .catch((err) => console.error(err));
