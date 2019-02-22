const passport=require('passport')
const Google=require('passport-google-oauth20');
const user=require('../schema/user');

passport.serializeUser(function(user,done){
  done(null,user.id);
});
passport.deserializeUser(function(id,done){
  user.findById(id).then(function(user){
    done(null,user);
  })
});

passport.use(new Google({
  callbackURL:'/google/redirect',
  clientID:'192695093229-kf95jtdv1jge25d86ak99e68dkrpu33o.apps.googleusercontent.com',
  clientSecret:'rXvfxBahDlJF1ORk7y660XM8'
},function(acc,ref,pro,done){
user.findOne({Eid:pro.id}).then((da)=>{
if(da)
{
  console.log("Already in database")
done(null,da);
}
else{
  var us=new user();
  us.name=pro.displayName;
  us.Eid=pro.id;
  us.lastlogin=Date.Now;
  us.save().then((da)=>{
    done(null,da)
  })
}



})
//user.findOne({Eid:pro.})





}))
