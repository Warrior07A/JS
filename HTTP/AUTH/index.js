const express=require("express");
const app=express();
// //never forget, wont be able to parse any request and cant get caught as well!
app.use(express.json());                      
var users=[];
 //token for each individual's accnt also need to be there
// [{username:"akshat",password:password,token:token}]     

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
         's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post('/signup',(req,res)=>{   
    const username=req.body.username;
    const password=req.body.password;

    // if (username.length<5){                                       //you can add a no of check in btw for e.g. this one!
    //     res.json({
    //         msg:"length is too small try again"
    //     })
    // }
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
    }
    if (foundUser){                                                                    //aagar signup kra hoga tabhi token will be generated
        const token=generateToken();                                                //otherwise postman ghumta hi rhega😅😅
        foundUser.token=token;
        res.json({
            token:token 
        })
    }
    else{
        res.json({
            msg:"invalid username or password"
        })
    }
    console.log(users);


   })

//IN POSTMAN add your token(generallly known as authorization) in the headers and not in the body since a thousand of req would be going out and you dont wanna put your token in each for each endpoint to identify you propely!
app.get("/me",(req,res)=>{                                                       //creating an AUTHENICATION ENDPOINT
    const token=req.headers.token
    let foundUser=null;                                                                                            
    for (let i=0;i<users.length;i++){
        if(users[i].token==token){
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