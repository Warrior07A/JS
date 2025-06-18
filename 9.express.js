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

// INTRO TO HTTPP:
// "https://petal-estimate-4e9.notion.site/Intro-to-HTTP-26c5803f153b4401aa76e9fac08ac427"

const express=require('express');
const express = require('express');
const app=express();

// //      route ,  requesthandler=>mostly a fn
app.get('/',function(req,res){               //request, response
    res.send("hello world");
})

app.listen(3000);    

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//GETTING QUERY PARAMETER
//Ways user can give an input on webpage                        in "GET" REQUEST!
// whatever your path is (uske aage)=> ?a=10&b=100&c=93..
// localhost:3000?a=10&b=13&c=32
const express=require('express')
const app=express();

function sum(n){
    let ans=0;
    for (let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

app.get('/',function(req,res){
    const n = req.query.a;                ///getting inputs by query    
    const ans=sum(n);                      //localhost:3000?a=10         
    res.send("hi your sum till then is "+ ans);
})

app.listen(3000);
//there's one other way of sending input via get (see i HTMLSERVER FOLDER)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//REQUEST METHODS
// 1.POST(ADD)    2.DELETE    3.PUT(UPDATE)      4.GET

//Creating an IN-MEMORY HOSPITAL!where a user can update or delte his kidney's health 
//GET:USERS CAN CHECK HOW MANY KIDNEYS THEY HAVE AND THEIR HEALTH
// POST:users can add a new kidney
// PUT:users can replace a kidney, make it healthy
// DELETE:users can remove a kidney
const express=require("express");
const app=express()

app.use(express.json())                     //express.json is a fn which returns anther fn that's why [called] it
                                    //it is a middleware u have to use whnever dealing with json in body in postman
const users=[{                       //it is an array of user object
    name:"John",                     //john is a dummy user of our hospital
    kidneys:[{
        healthy:false
    }]
}]

app.get('/',function(req,res){
    const johnkidney=users[0].kidneys;
    const nofkidney=johnkidney.length;
    let nofhealthykidneys=0;
    for (let i=0;i<johnkidney.length;i++){            //determines how many kidneys john have that are healthy
        if(johnkidney[i].healthy){
            nofhealthykidneys+=1;
        }
    }
    const noofunhealthykideys=nofkidney-nofhealthykidneys
    res.json({                                             //giving back response in the form of json
        nofkidney,                                           //though we can return json empty as well
        nofhealthykidneys,noofunhealthykideys
    })
})


    //post:users can add a new kidney
  //NOW THE THING IS HOW TO SEND A POST REQUEST??
  // while opeing a webpage it always sends a get request u can send post by postman
    //go to postman and send a post request in JSON IN RAW BODY {
                                                                    // isHealthy:true
                                                                          // }
app.post("/",function(req,res){                               // input in post is send in body  
    const isHealthy=req.body.isHealthy;                      //increase no of healthykidne = no of times put req sent
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"DONE"
    })
})

//PUT:User can replace  a kidney making it healthy
//it replaces unhealthhy to healthy so make sure to ;bring some post request first and then send put requestt using POSTMAN
//no need for body in put
app.put("/",function(req,res){
    
    for (let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;                             //forces health of all kidneys to be healthy now
    }
    res.json({
                                         //fine if empty but req since req wont be sent in none returned to user
    })
})


//DELETE:deletes all the unhealthy kidneys
app.delete("/",function(req,res){
    newkidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if (users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy:true
            })
        }
        users[0].kidneys=newkidneys;
        res.json({
            msg:"badal di bhaiya kidniyaa"
        })
    }
})
app.listen(3000);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>