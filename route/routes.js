const express=require('express');
const route=express.Router();
const passport=require('passport');
const Request=require('request')
const isauth=function(req,res,next){
  if(req.user==null)
  {
    res.redirect('/')
  }
  else{
    next();
  }
}

route.get('/google',passport.authenticate('google',{scope:['profile']}));
route.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
  res.redirect('/homepage')
})

route.get('/homepage',isauth,(req,res)=>{
  res.send("Hello"+req.user.name);
  Request.get('https://api.twitter.com/1.1/search/tweets.json',(err,res,bo)=>{
    console.log(res);
  })
})

route.get('/',(req,res)=>{
  res.send("HELLO")
});
module.exports=route;
