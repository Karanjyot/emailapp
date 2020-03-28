const express = require("express");
const passport = require("passport");
const keys = require("./config/keys")
const GoogleStrategy = require("passport-google-oauth20").Strategy

// generate app object
const app = express();


// allowing passport to use the new instance of passport strategy and adding 2 arguments
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
},(accessToken) => {
    console.log(accessToken);
}));

const PORT = process.env.PORT || 5000

// listen to port 
app.listen(PORT);