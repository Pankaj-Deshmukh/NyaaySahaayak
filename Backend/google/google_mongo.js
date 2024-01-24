const passport=require("passport")

const GoogleStrategy=require('passport-google-oauth2').Strategy

passport.use(new GoogleStrategy({
    clientID:"601511902773-425guolbghpg62c970bp268hrv54cjvk.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:4000/auth/callback",
    passReqToCallback:true
  },function(request,accessToken,refreshToken,profile,done){
      done(null,profile)
  }))
passport.serializeUser((user,done)=>{
  done(null,user)
})
passport.deserializeUser((user,done)=>{
  done(null,user)
})
