const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const getRoutes = require("./routes")
require("dotenv").config();

const app = express();
// CROSS-ORIGIN
const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

// MIDDLEWARES
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MONGODB Hooray!!!");
  })
  .catch((error) => {
    console.log("Error starting database", error);
  });

// DEFAULT ROUTE
app.get("/", (req, res) => res.send("Welcome, Marketing Website Backend!"));
app.use("/api", getRoutes());

// CONNECT TO THE SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
