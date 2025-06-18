// //making A Working HTTP SERVER!
// STEP 1 : npm init -y (initiates node files and adds package.json)

const express=require("express");
const app=express();

app.get("/multiply",function(req,res){
    const a=req.query.a
    const b=req.query.b
    res.json({
        ans:a*b
    })
})

app.get("/sum",function(req,res){
    const a=parseInt(req.query.a);          ////problem comes in sum and subtract since it takes query input as
    const b=parseInt(req.query.b)         // "1" + "2"  yes as strings    
    res.json({
        ans:a+b
    })
})

app.get("/subtract",function(req,res){
    const a=req.query.a
    const b=req.query.b
    const sub=(a-b)
    res.json({
        ans:sub
    }) 
})

app.get("/divide/:a/:b",function(req,res){
    const a=req.params.a
    const b=req.params.b
    res.json({
        ans:(a/b)
    }
    )
})

app.listen(3000);
// i tried diff logic of adding sub and multiply try understanding all