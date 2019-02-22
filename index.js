const express=require('express');
const app=express();
const route=require('./route/routes.js')
const google=require('./config/google.js')
const passport=require('passport');
const cookie = require('cookie-session');
const mongoose=require('mongoose');
mongoose.connect('mongodb://uphaar2:uphaar2@ds241869.mlab.com:41869/test1')
app.use(cookie({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['CAPEDCRUSADER']
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(route)


app.listen(1111,()=>{
  console.log("Running");
})
