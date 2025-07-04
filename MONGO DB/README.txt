• Link for Basic Questions and Slides:-"https://petal-estimate-4e9.notion.site/Databases-and-MongoDb-1017dfd107358065a996cda5ed89682e"
READ IT FIRST 
THEN,
• What is Schema?
    it is a structured way of telling to DB what our data would be looking like inside our tables!
    E.G.users{
        name:"string",
        emaail:"string"          ..............
    }

• NO SQL IS BETTER THAN SQL since it has Schema Flexibility  (you don't need to define the schema)

• what is a cluster?
A bunch of machines holding our data are called CLUSTERS


QUES: what is the differneve between NOSQL AND SQL?

    NOSQL is (Schema less)
    SQL (Needs Schema to be defined)
    Then why did we defined schema in mongo here??        We need the data schema to be strict and follow a certain order that's why we used mongooose
                                                            IF we use mongodb we dont need a schema 

//working on Improvements

// 1. HASHING PASSWORDS;
    // Hashing is simply converting them to any JIBRISH and it doesn't work the reverse way back so easily cant be decoded easily
    // It is important because if anyone got the access of the DB he/she wont be able to see them as plain


// You might be wondering if you hashed the password in BACKEND only during signup and stored the hash in db DIRECTLY
    // how will you be able to signin when user enters his password i.e. how would you compare??
    // when user will sign in and put in the password
    //the same algorithm will hash his entered password and
    // will compare it with that of DB hashed!
//COOOL ISN'T IT??

// VULNERABILITY:
    //if two users lets say akshat and Satya have the same password hence they will have the same hash as well
    // in some way possible if i'm able to ask Satya's password by calling him or befriending him , i'll be able to know Akshat's password as well
    // thing is how to make logic such that even if passwords are same hash won't be the same!

//SOLUTION IS SALTING:--
    //whatever the password of the user is will be salted or added to a random salt(string) and  a new hash will be created and stored in DB with salt
    //now both the person password might be the same but the salt would be differnt(randomly generated) and hence hash won't be same!
    //check IMAGES/image.png
     