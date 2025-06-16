//MIDDLEWARES is basically the medium or a mid person between the client request and the main server db that redirects the 
// request of the client to a middleware (a new server(that is used for accessing data from th user ))

//2 ways to make a middleware are-


const express=require('express');
const app=express();

app.use(function(req,res,next){
    console.log("1st middleware chala")  //all the request below this line will go through app.use first before hitting any server
    next();             //yhi se middleware aage request ko jaane dega vra req will get blocked
});                           

app.use(function(req,res,next){
    console.log("2nd middlware chala");
    next();
})


app.get('/',function(req,res){
    res.send("hello world");
})

app.get('/about',function(req,res){
    res.send("This is an About Page!!");
})
app.listen(3001);   
