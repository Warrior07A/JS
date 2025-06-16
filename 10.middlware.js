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


//USING MIDDLEWARE
// Middleware fn are the fn that have access to the (request object) ,(response object) and the next middleware fn
// in the application req response cycle.It is usually denoted by "next"
//Middlewares can perform the following functions
//  exercute any code
// /         Make changes to the req res objects /
//                      end the req res cycle/
//                                    call the next middleware fn in the stack

const express=require('express');
const app=express()

function  agecheck(req,res,next){                                   //middleware fn
    const age=req.query.age;                                     //add ?ticket=free after url to get access
    if(age>=18){
        next()
        
    }
    else{
        res.send("you are  under age get above 17 first")
    }
}

app.use(agecheck);                                                  //middleware call
                                            //now every req under this will go through this middleware
app.get("/ride1",function(req,res){          //for a specific middlware to be actiavted on a route use
    res.send("you rode ride no 1")             //app.get("/ride1",middlewarefn,function(req,res){  
})                                                 // res.send("you rode ride no 1")

app.get("/ride2",function(req,res){
    res.send("you rode ride no 2");
})



app.listen(3000);

