//classes
//**promises is also a class that's why we are learning it here!!!! */
// In JS cLASSES are a way to define blueprint  for creating objects

class Rectangle{
    constructor(width,height) {                             //constructor is a  keyword, would come in every class
        this.width = width;                                 //arguments btane ka way this.width and this.height
        this.height = height;
    }

    area(){                                                  //fn to be used inside class only
        return this.width * this.height;
    }

    perimeter(){
        return 2*(this.width+this.height);
    }
}
                        //5 and 10 becomes width and height in constructor
let rect1=new Rectangle(5,10);                              ///easily created an object with just passing arguments
console.log(rect1.area());     //50                              //called the fn using class
console.log(rect1.perimeter());   //30


//DATE CLASS(INBUILT CLASS)'
var datee=new Date();
console.log(datee);   //gets current date
console.log(datee.getDate());
console.log(datee.getMonth());                          //similarly year


//MAPS CLASS(INBUILT CLASS)
var maps=new Map();
maps.set('name','Akshat');                                //sets name to Akshat
maps.set('age',30);
console.log(maps.get('name'));
console.log(maps.get('age'));


//Promises
function newfn(){

}

var p=new Promise(newfn);                               //promise takes fn as an argument
console.log(p);                                         //here we see promise is pending since i





//assignmemt:                                                          //callback hell
//print hello world 1 after 1sec.
//after it print hello world 2 after 2sec;
//after it print hello world 3 after 6 sec; 
setTimeout(()=>{                                                        //nested Settimeout
    console.log("hi there 1");                                        
    setTimeout(()=>{
        console.log("hi there 2");
        setTimeout(()=>{
            console.log("hi there 3");
        },6000);
    },2000);
},1000);

//in order to avoid callback hell to occur PROISES CAME INTO PICTURE!!

function promisifiedTimeout(timeout) {                    //creating our own promises might learn more later on 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },timeout);
    });
}

async function main(){                                         //writing of an asyn fn
    await promisifiedTimeout(1000);                           //  making it await until the response come
    console.log("hi there 11");
    await promisifiedTimeout(3000);                             //similarly
    console.log("hi there 12");
    await promisifiedTimeout(2000);                                 //here as well
    console.log("hi there 13");
}

main();
console.log("pehle mein");                                        // since its not an async code it will print first