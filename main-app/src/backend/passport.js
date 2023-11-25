const passport=require("passport")

const GoogleStrategy=require('passport-google-oauth2').Strategy

passport.use(new GoogleStrategy({
    clientID:"10485817299-dv2mpil2ns3m9ecr7ctg69k2utrdpsln.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/callback",
    passReqToCallback:true
  },function(request,accessToken,refreshToken,profile,done){
    console.log(profile)
    return done(null,profile)
  }))
