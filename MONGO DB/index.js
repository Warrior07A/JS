const  express=require("express");
const app=express();
const {Usermodel,Todomodel}=require("./db");                                            //exported these two from db.js  //in short linked mongodb
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const JWT_SECRET="ITSSECRET";
const bcrypt=require("bcrypt");
const {z} =require ("zod");


mongoose.connect("mongodb+srv://Warrior07A:fsaXmSchnThTIhBZ@cluster0.ru0uizx.mongodb.net/todo   ")   //after cluster name /todo (name of db )if not creates a new one
app.use(express.json());

let Throwerror=false;
app.post("/signup",async function(req,res){                                            //since creation of data to mongodb server takes some time
    // try{                                        
        const requiredbody=z.object({                                               //whatever we have to validate just make a schema for that in zod
            email:z.string().min(3).max(100).email(),
            password:z.string().min(3).max(100),
            name:z.string().min(3).max(100)
                })
        const parsdDatawithsuccess=requiredbody.safeParse(req.body);                //it will let us know if there's an error in user's input(safely goes through each zod validation above)

        
        if(!parsdDatawithsuccess.success){
            res.json({
                msg:"incorrect format",
                error:parsdDatawithsuccess.error                                    //prints complete inforamton about the error in frontend !
            })
            return
        }
        if(parsdDatawithsuccess.success){
        res.json({
            msg:"you have been signedup"
        })
}
    
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;
    const hashedpassword= await  bcrypt.hash(password,10);                              //hashing password and storing hash in DB
    
    await Usermodel.create({
        email:email,
        name:name,
        password:hashedpassword
        
    })}
    // catch(e){
    //     res.json({
    //         msg:"An ERROR Occured. Please check your creds !"})
    //         Throwerror=true;
    // }
    // if(!Throwerror){
    //     res.json({
    //     msg:"you have been signed up"
    // })
    // }
    

// }

)

app.post("/signin",async function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    const user=await Usermodel.findOne({
        email:email,
        // password:password                                                    //cannot give plain password to be compared !
 })
    if(!user){
        res.json({
            msg:"user does not exist"
        })
        return;
    }
    const passwordmatch=await bcrypt.compare(password,user.password);               //make sure to make it "AWAIT" or it'll approve all passwords
    console.log(user)

    if (passwordmatch){
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
        req.userID=decodedtoken.id                                                              //after getting decoded you'r getting id✅   _id❌
        next()
    }else{
        res.status(403).json({
            msg:"INCORRECT CREDENTIALS"
        })
    }
}

app.listen(3000);


