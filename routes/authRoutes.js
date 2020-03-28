const passport = require("passport")

module.exports=(app) =>{
//when user hits this route we ask passport to authenticate using the strategy called google. Scope allows google to know what permissions we are asking for.
app.get("/auth/google", passport.authenticate("google",{
    scope: ["profile", "email"]

})
);
//once user is confirm authentication,user is redirected to url below with a code. Passport calls on the google strategy which calls on accessToken inside GoogleStrategy.
app.get("/auth/google/callback", passport.authenticate("google"))
const PORT = process.env.PORT || 5000
};