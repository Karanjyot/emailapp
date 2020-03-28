const express = require("express");
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport");

const authRoutes = require("./routes/authRoutes")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/emaildb", { useNewUrlParser: true });

// generate app object
const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000
// listen to port 
app.listen(PORT);
