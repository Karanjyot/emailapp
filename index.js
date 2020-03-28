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

//when user hits this route we ask passport to authenticate using the strategy called google. Scope allows google to know what permissions we are asking for.
app.get("/auth/google", passport.authenticate("google",{
    scope: ["profile", "email"]

})
);
//once user is confirm authentication,user is redirected to url below with a code. Passport calls on the google strategy which calls on access token inside GoogleStrategy.
app.get("/auth/google/callback", passport.authenticate("google"))
const PORT = process.env.PORT || 5000

// listen to port 
app.listen(PORT);