//Objects in JS
//key value pair

//instead of Violating DRY and using 3 var variables
//INTRODUCE OBJECTS


var user1={                         //now only 1 variable we have
    fstname:"akshat",                   //it takes value so string in brackets! 
    lstname:"mittal",
    age:18,
    address:"Delhi",
    pin:1311,
}

//Fetching data from objects
console.log(user1);  //{ fstname: 'akshat', lstname: 'mittal', age: 18 }
console.log(user1.fstname);//akshat
//                  (OR)
console.log(user1["fstname"]);  //akshat       //remem. to put  fname in quotes cz its a string
// console.log(user1[age]);        //age is not defined for user 1

//finding length of objects
console.log(Object.keys(user1).length); //3
                                        //It is a bit expensive operation but there's no other way 
                                        //convert objevts to array and then length!
             
                                        
//iterating over the object 
var keys=Object.keys(user1); //[ 'fstname', 'lstname', 'age', 'address', 'pin' ]    //returns an array in keys
for (var i=0;i<keys.length;i++){   //iterating over key in keys variable
    console.log(keys[i]);       
    console.log(user1[keys[i]]);        //easy getting value for each key
}


//fetching only values in objects
var valuekk =Object.values(user1);          //returns value in valuekk  //[ 'akshat', 'mittal', 18, 'Delhi', 1311 ]
console.log(valuekk);


//fetching key:value both 
var entry=Object.entries(user1);    //returns an object in which key:value pair is put in an array
console.log(entry);


//Complex Objects
var user2={
    fstname:"akshat",
    lst:"mittal",
    age:18,
    state:{                    //key cannot be an object but value can further be an object 👍
        area:"goa",
        nearbycity:"haveli",
        country:"india",
        code:"blah blah"
    }
}
console.log(user2);
