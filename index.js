const express = require("express");

// generate app object
const app = express();

app.get("/", (req,res) =>{

    res.send({  hi: "there"});
});


const PORT = process.env.PORT || 5000

// listen to port 
app.listen(PORT);