// //making A Working HTTP SERVER!
// STEP 1 : npm init -y (initiates node files and adds package.json)

const express=require("express");
const app=express();

let noofreq=0;


function requestIncreaser(req,res,next){
    noofreq+=1;
    next();
}

app.get("/multiply",requestIncreaser,function(req,res){           //there need to be a next in fn to continue otherwise wont work
    const a=req.query.a
    const b=req.query.b
    res.json({                                                 //you can only send one request to theserver=> one res.json
        ans:a*b,                        //include everything in there! by commas
        noofreq
    })
    
})

app.get("/sum",requestIncreaser,function(req,res){
    const a=parseInt(req.query.a);          ////problem comes in sum and subtract since it takes query input as
    const b=parseInt(req.query.b)         // "1" + "2"  yes as strings    
    res.json({
        ans:a+b,
        noofreq
    })
})

app.listen(3000);
// i tried diff logic of adding sub and multiply try understanding all



//CROSS ORIGIN RESOURCE SHARING

//if you'r sending a fetch req to the server and the server is returning you with imp data over to you
//that's a vulnerability that needs to be fixed
//eg google.com Front end sending fetch data req to hdfcnetbanking BE 
// Normally node.js do not allow "CORS" and others also block any 3rd party request thereby closing the vulner port!
//link="https://petal-estimate-4e9.notion.site/cors-Cross-origin-resource-sharing-e629aed258c04a669cbe2de1f13a9ac3"
