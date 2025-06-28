
const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");                                    
const JWT_SECRET="randommsecretstringorwhat";                          

app.use(express.json());                      


app.use(logger)

function logger(req,res,next){                                              
    console.log(req.method+"method is being used")
    next();
}

//we need to host our front end on the same backend port for it to work (optional);
// mainly we need to shorten our FE port and connnect the both
app.get("/",(req,res)=>{    
    res.sendFile(__dirname + "/public/index.html");                               //sends the FE file on this path
})                                                                                  //make sure you'r on this folder only where public is

function auth(req,res,next){
  var token=req.headers.token;                                              
  var decodedtoken=jwt.verify(token,JWT_SECRET);

  if(decodedtoken.username){                                            
    req.username=decodedtoken.username;           
    next()
  }
  else{
    res.json({
     msg:"you are not loggged in "   
    }
    )
  }
}

var users=[];    


app.post('/signup',(req,res)=>{                                        
    var username=req.body.username;
    var password=req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        msg:"you are good to go!"
    })
    console.log(users);
})


app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let foundUser=null;                                                                 
    for(let i=0;i<users.length;i++){
        if (users[i].username==username && users[i].password==password){
            foundUser=users[i];
            
        }}
        if (foundUser){
            const token=jwt.sign({                                                  
                username:username                                                   
            },JWT_SECRET);
            // foundUser.token=token;                                               
            res.header("JWT",token);                                                
            res.header("random","anythingjibrish")                                   
            res.json({
                token:token,
                msg:"user identified successfully"
            })
        }else{
            res.status(403).send({
                mssg:"invalid username or password"
            })
        }
    }
   )

app.get("/me",auth,(req,res)=>{                                                          
   


   
    console.log(req.header);
    let foundUser=null;                                                                                            
    for (let i=0 ; i < users.length ; i++){                                                  
        if(users[i].username === req.username){                                           
          foundUser=users[i]; 
        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password,
            
        })
    }
    else{
        res.json({
            mssg:"sorry banda not found"
        })
    }
                                                                        
})


app.listen(3000);

