const passport = require("passport")

module.exports=(app) =>{
//when user hits this route we ask passport to authenticate using the strategy called google. Scope allows google to know what permissions we are asking for.
app.get("/auth/google", passport.authenticate("google",{
    scope: ["profile", "email"]

})
);
//once user is confirm authentication,user is redirected to url below with a code. Passport calls on the google strategy which calls on accessToken inside GoogleStrategy.
app.get("/auth/google/callback", passport.authenticate("google"))

//logout is automatically attached to the req object by passport. It takes the cookie that contains user id and removes the id. 
app.get("/api/logout", (req,res) =>{
    req.logout();
    res.send(req.user);
})

//send back the user. User is automatically attached to the req object by passport. Route to determine if user is signed in. 
app.get("/api/current_user", (req,res)=>{
    res.send(req.user)
});

};