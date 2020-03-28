const passport = require("passport");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require("mongoose");

const User = mongoose.model("users");

// allowing passport to use the new instance of passport strategy and adding 2 arguments
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
},(accessToken, refreshToken, profile, done) => {
    //creates record using model instance and saves it
    new User({ googleId: profile.id }).save();
}));
