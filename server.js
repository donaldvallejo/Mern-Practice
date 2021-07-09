const PORT = process.env.PORT || 5000;

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// setup express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// routes
app.use(require("./controllers/routes"))
app.use("/api", require("./controllers/apiRoutes"))

// mongoose connections
mongoose.connect(
     process.env.MONGODB_URI || "mongodb://localhost/MernPost",
     {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false,
       useCreateIndex: true
      }
)

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
