const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://NHKusers:nhkusers@nhkusers.okqyjty.mongodb.net/NHK_users")
.then(()=>{
    console.log("connected to db");
})
.catch(()=>{
    console.log("acces denied");
});
const mongoscheema = new mongoose.Schema({
    name:{
        type:String,
    },
    gmailid:{
        type:String
    }
},{
    collection:'Google_data'
})
const model =  mongoose.model("Google_data",mongoscheema)
module.exports=model