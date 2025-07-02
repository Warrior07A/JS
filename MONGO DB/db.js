const mongoose=require("mongoose");

const Schema=mongoose.Schema;                                                      //mongoose exports a class called schema
const ObjectId=mongoose.ObjectId;


const User=new Schema({
    email:{type:String,unique:true},
    name:String,
    password:String
})

const Todo=new Schema({
    title:String,
    done:Boolean,
    userID:ObjectId
})

const Usermodel=mongoose.model("users",User);                                    //creates a new database of the user in users db with schema User
const Todomodel=mongoose.model("todo",Todo);                                     //model does that work to create


module.exports={
    Usermodel:Usermodel,                                                            //helps to import these two to index.js
    Todomodel:Todomodel
}