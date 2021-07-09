const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
// setup express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(require("./controllers/routes"))
app.use("/api", require("./controllers/apiRoutes"))


// mongoose.connect(
//     process.env.MONGO_URI || "mongodb://localhost/3000",
//     {

//     }
// )

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));