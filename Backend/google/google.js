const express = require('express');
const passport = require('passport');
const GoogleStrategy=require('passport-google-oauth2').Strategy;
const session = require('express-session');
const { UserModel } = require('../db/index');
const cors = require('cors');
// require('./google_passport');


const app = express();


passport.use(new GoogleStrategy({
  clientID:"601511902773-425guolbghpg62c970bp268hrv54cjvk.apps.googleusercontent.com",
  clientSecret: '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',
  callbackURL: "http://localhost:4000/auth/callback",
  passReqToCallback:true
},function(request,accessToken,refreshToken,profile,done){
    done(null,profile)
  }));

passport.serializeUser((user,done)=>{
  done(null,user)
}),
passport.deserializeUser((user,done)=>{
 done(null,user)
}),


app.use(session({
  secret: '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',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());



app.get('/auth', passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/callback',
  
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/'
  })
);



app.get('/home', async (req, res) => {
    try {
      // console.log('Entering /home route');
      // console.log(req.user);
  
      const Googledata = new UserModel({
        name: req.user.displayName,
        gmailid: req.user.email,
      });
  
      const data = await Googledata.save();
      res.redirect("http://localhost:3000/home")
      // res.send(data);
    } catch (error) {
      console.error('Error in /home route:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
// Failure
app.get('/', (req, res) => {
  res.send("Error");
  
});

app.listen(4000, () => {
  console.log(`Listening on port ${4000}`);
});
