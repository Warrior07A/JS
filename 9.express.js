//Express.js Framework

//Introduction to Express.js
//Express.js ek npm package h
//it is a framework 

//FRAMEWORK-------
// BASIC SET OF RULES OR WAYS WHICH NEED TO BE FOLLOWED while
// WORKING 
// I.E. WORKING IN A CONTINUOUS FLOW IN A CERTAIN MANNER(YOU CAN DIFFER BY INDIVIDUALITY OFFC)
// tHAT'S WHAT CALLED A FRAMEWORK!!

//express
//framework
//manages everything from receving to sending and proceesing every request on the server


// const express=require('express');
// const app=express();

// //      route ,  requesthandler=>mostly a fn
// app.get('/',function(req,res){               //request, resoponse
//     res.send("hello world");
// })

// app.listen(3000);    

//MIDDLEWARES is basically the medium or a mid person between the client request and the main server db that redirects the 
// request of the client to a middleware (a new server(that is used for accessing data from th user ))

//2 ways to make a middleware are-


const express=require('express');
const app2=express();

app2.use(function(req,res,next){
    console.log("1st middleware chala")  //all the request below this line will go through app.use first before hitting any server
    next();             //yhi se middleware aage request ko jaane dega vra req will get blocked
});                           

app2.use(function(req,res,next){
    console.log("2nd middlware chala");
    next();
})


app2.get('/',function(req,res){
    res.send("hello world");
})

app2.get('/about',function(req,res){
    res.send("This is an About Page!!");
})
app2.listen(3001);   
