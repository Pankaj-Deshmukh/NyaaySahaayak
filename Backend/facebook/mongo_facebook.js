const mongoose  = require("mongoose")
mongoose.connect("mongodb+srv://NHKusers:NHKusers@nhkusers.okqyjty.mongodb.net/NHK_users")
.then(() =>{
    console.log("mongodb connected");
})
.catch(() =>{
    console.log("failed to connect");
})

const LoginSchema = mongoose.Schema({
    id:{
        type: String,
        required : true
    },
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
        
    }

})
const collection = new mongoose.model("collec 1",LoginSchema)
module.exports = collection

