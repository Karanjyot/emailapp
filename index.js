const express = require("express");

// generate app object
const app = express();

app.get(".", (req,res) =>{

    res.send({  hi: "there"});
});

app.listen(5000);