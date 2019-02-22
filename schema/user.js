const mongoose=require('mongoose');
const schema=mongoose.Schema;

var user=new schema({
name:{
  type:String
},
lastlogin:{
  type:Date
},
Eid:{
  type:String
}
})

var us=mongoose.model('user',user);
module.exports=us;
