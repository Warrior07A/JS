// //making A Working HTTP SERVER!
// STEP 1 : npm init -y (initiates node files and adds package.json)

const express=require("express");
const app=express();

let noofreq=0;


function requestIncreaser(req,res,next){
    console.log("Method is"+ req.method);                          //logs the method used
    console.log("URL IS "+req.hostname);                                //logs the url
    console.log(new Date());                                        //logs th date
    console.log("route is "+ req.url);
    next();
}

app.use(requestIncreaser);

app.get("/multiply",function(req,res){           //there need to be a next in fn to continue otherwise wont work
    const a=req.query.a
    const b=req.query.b
    noofreq+=1;
    res.json({                                                 //you can only send one request to theserver=> one res.json
        ans:a*b,                        //include everything in there! by commas
        noofreq,
    })
})

app.get("/sum",requestIncreaser,function(req,res){
    const a=parseInt(req.query.a);          ////problem comes in sum and subtract since it takes query input as
    const b=parseInt(req.query.b) 
    noofreq+=1;                                             // "1" + "2"  yes as strings    
    res.json({
        ans:a+b,
        noofreq
    })
})

app.listen(3000);
// i tried diff logic of adding sub and multiply try understanding all




