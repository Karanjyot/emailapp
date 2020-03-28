const express = require("express");
require("./services/passport")
const authRoutes = require("./routes/authRoutes")

// generate app object
const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000
// listen to port 
app.listen(PORT);
