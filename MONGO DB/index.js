const  express=require("express");
const app=express();
const {Usermodel,Todomodel}=require("./db");                                            //exported these two from db.js  //in short linked mongodb
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const JWT_SECRET="ITSSECRET";

mongoose.connect("mongodb+srv://Warrior07A:fsaXmSchnThTIhBZ@cluster0.ru0uizx.mongodb.net/todo")   //after cluster name /todo (name of db )if not creates a new one
app.use(express.json());


app.post("/signup",async function(req,res){                                             //since creation of data to mongodb server takes some time
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    await Usermodel.create({
        email:email,
        name:name,
        password:password
        
    })
    res.json({
        msg:"you have been signed up"
    })

})

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    const user=await Usermodel.findOne({
        email:email,
        password:password  
 })

 console.log(user)

    if (user){
        const token=jwt.sign({
            id:user._id.toString()                                              //_id is of objectid class that is not defined when decoded hence need to convert it to string for use
    },JWT_SECRET);
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
             msg:"INvalid credentials"
        })
    }
})

app.post("/todo",auth,async function(req,res){                                  //creating a new todo for the user!
    const userID=req.userID;
    const title=req.body.title;
    await Todomodel.create({
        title:title,
        userID:userID
    })

    res.json({
        msg:"todo created"                                                    
    })

})

app.get("/todos",auth,async function (req,res) {                                     //accessing all the user in a go
     const userID=req.userID;                                                   //its returning the userID now you can access its personalised todo
     const todos=await Todomodel.find({
        userID:userID
        
     })
      res.json({
        todos
    })

})

async function auth(req,res,next){
    const token=req.headers.token;
    const decodedtoken=jwt.verify(token,JWT_SECRET);
    if (decodedtoken){
        req.userID=decodedtoken.id                                                              //after getting decoded you'r getting id✅ _id❌
        next()
    }else{
        res.status(403).json({
            msg:"INCORRECT CREDENTIALS"
        })
    }
}

app.listen(3000);