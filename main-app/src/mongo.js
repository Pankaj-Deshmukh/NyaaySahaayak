const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1/Login_and_signup_details")  //connecting DB to node
.then(()=>{
    console.log("MongoDB connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

const loginSchema=new mongoose.Schema({                    //for documents
    name:{
        type : String,
        required:true
    },
    password:{
        type : String,
        required:true
    },
    email:{
        type : String,
        required : true
    }
})

const collection = new mongoose.model("collection003",loginSchema)
module.exports = collection;