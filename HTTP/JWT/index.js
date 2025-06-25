const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");                                      //imported library
const JWT_SECRET="randommsecretstringorwhat";                           //THIS IS IMP FOR ENCODING/DECODING

app.use(express.json());                      

var users=[];    

//NO NEED FOR ENCRYPTION/DECRYPTION OURSELVES 
//INSTALLED   "npm install jsonwebtoken"


app.post('/signup',(req,res)=>{   
    const username=req.body.username;
    const password=req.body.password;

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
    let foundUser=null;                                                                 //you'll find a far better logic using map/filter in slides
    for(let i=0;i<users.length;i++){
        if (users[i].username==username && users[i].password==password){
            foundUser=users[i];
        }
        if (foundUser){
            const token=jwt.sign({                                                  //TAKES 2 ARGUMENTS (what you wanna encode,JWT_SECRET)
                username:username                                                      ///convert username to JWT
            },JWT_SECRET);
            // foundUser.token=token;                                               //since JWT is a stateless token we dont have to store it in any variable now
            res.json({
                token:token
            })
        }else{
            res.status(403).send({
                mssg:"invalid username or password"
            })
        }
    }
   })

//IN POSTMAN add your token(generallly known as authorization) in the headers and not in the body since a thousand of req would be going out and you dont wanna put your token in each for each endpoint to identify you propely!   
app.get("/me",(req,res)=>{                                                           //creating an AUTHENICATION ENDPOINT
    const token=req.headers.token       
    const decodedtoken=jwt.verify(token,JWT_SECRET);                                  //{username:"akshat@gmail.com"}
    const username =decodedtoken.username


    //if we needed only username we would have done res.send(username ) and done!
    // but since we need password as well we need to hit the database!

    let foundUser=null;                                                                                            
    for (let i=0;i<users.length;i++){                                                  //looping to find the user in DB
        if(users[i].username==username){
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

//  • in postman go hit signup end point with post and {"username":"akshat",
                                                    //     "password":"!23112"
                                                    //          }
//   • and then hit signin ,you'll get the token 
//    • add the token in headers and write token in left and jibrish in right and hit send,,you ll get back you username and passworrd 