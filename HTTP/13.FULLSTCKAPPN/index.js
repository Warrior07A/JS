//CROSS ORIGIN RESOURCE SHARING

//if you'r sending a fetch req to the server and the server is returning you with imp data over to you
//that's a vulnerability that needs to be fixed
//eg google.com Front end sending fetch data req to hdfcnetbanking BE 
// Normally node.js do not allow "CORS" and others also block any 3rd party request thereby closing the vulner port!
//link="https://petal-estimate-4e9.notion.site/cors-Cross-origin-resource-sharing-e629aed258c04a669cbe2de1f13a9ac3"

//ASSIGNEMNT
//creating a backend server in node.js that returns the sum endpoint
//write an HTML File , that hits the backend server using fetch api

const express=require('express');
const app=express();
const cors=require('cors');                             //installed cors later


app.use(express.json());
app.use(cors());              //if you wanna make all req a success (all req allowed)

app.use(cors({
    domains: ["https://facebook.com" ,"https://google.com"]           //access for backend only for these 2 sites
}));


app.post("/sum",function(req,res){
    const a =parseInt( req.body.a)
    const b = parseInt(req.body.b);
    res.json({
        answer:a+b
    })
})

app.listen(3000);


 //how to overcome CORS then??
// npm install cors

//used cors afterthen!