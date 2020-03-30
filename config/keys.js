
if (process.env.NODE_ENV === "production"){
    // return prod keys
    module.exports = require("./prod");

}else{
    // return dev keys

    module.exports = require("./dev");
}


// client id: 240705514431-01noir7ve71u3ee5sod212rt2equpse9.apps.googleusercontent.com

// secret: _jvIsC5UZPkV6AN_Za2fVVCl