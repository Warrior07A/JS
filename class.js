
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


//doc link :"https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-1"


//promise based approach
function setTimepromisified(delay){
    return new Promise((resolve)=>{
        setTimeout(resolve,delay);
    })
    }
  ///                                                   can also be written 
//Q1 PRINT HI THERE AFTER 1S AND HELLO AFTER 2SEC
setTimepromisified(1000)                               // const p=setTimepromisified(1000)
    .then(function(){                                  // p.then.....
        console.log("HI THERE");
    })                         

setTimepromisified(2000)
    .then(function(){
        console.log("HELLO");
    })
        
//Q2 PRINT HI THERE AFTER 1S AND JUST AFTER 1ST TASK EXCEUTES PRINT HELLO AFTER 5 MORE SEC

setTimepromisified(1000)
    .then(function(){
        console.log("HI THERE");
    })
    .then(()=>{
        setTimeout(()=>{
            console.log("HELLO")
        },5000)
    })


//Q3 Start two promises (one for 1s, one for 2s) together ,
//When both are done print both are done on the screen

let d1=6000;
let d2=4000;
let done=0;
 setTimepromisified(d1)
    .then(()=>{  
        console.log(d1+"secs have passed")
        done+=1;
        if (done==2)  console.log("BOTH ARE DONE");            //HERE KEY LEARNI..(dont compare time ,
    })                                                      //comapare which one has been logged first)
setTimepromisified(d2)                        
    .then(()=>{
        console.log(d2+"secs have passed");
        done+=1;
        if (done==2) console.log("both are done");  
    })
    


//Q4 Create a function called (all) tht takes an array of promises as an input. It also takes a call back fn as an input.
//It calls the callback fn whenever all the promises have been resolved!
                                                                    //ITS AN INTERVIEW QUES :)
function setTimepromisified(delay){
    return new Promise((resolve)=>{
        setTimeout(resolve,delay);
    })
    }

var p1=setTimepromisified(1000).then(function () {           //resolving promise 1
    console.log("promise 1 is done");
})

var p2=setTimepromisified(3000).then(function () {           //resolving p2
    console.log("Promise 2 is done");
})

all([p1,p2],function(){
    console.log("All promises are resolved");
} )

function all(promise,callback){
    var done=0;
    PROMISE_TOTAL=promise.length;                                    //finding no of promises
    if (PROMISE_TOTAL==0) {                                      //edge case in case of no promises
        callback()
    }
    for (var i=0;i<PROMISE_TOTAL;i++){                                 
        promise[i].then(function(){
          done+=1;
          if(done==PROMISE_TOTAL){                                      //MAKE SURE TO GET THIS IN .THEN only then it will check
            callback();                                             //every time it'll check a new promise 
            }                                                        //counting and then matching with total nooof promises
               })
          
    }
}

//create a fn called one which resolves when any one of the promise get resolved!

function setTimepromisified(delay){
    return new Promise((resolve)=>{
        setTimeout(resolve,delay);
    })
    }


var p1=setTimepromisified(1000).then(function(){
    console.log("promise 1 is resolved");

})

var p2=setTimepromisified(3000).then(function(){
    console.log("promise 2 is resolved");

})

one([p1,p2],function(){
    console.log("promise is resolved");
})

function one(promise,callback){
    TOTAL_PROMISE=promise.length;
    var done=0;
    for (var i=0;i<TOTAL_PROMISE;i++){
        promise[i].then(function(){
            done+=1;
        if (done==1){
        callback();
        }
        })
        
    }
}

//actually what we did in upper assignment has been a functio [promise.all]
//we created one for ourselves actually and yeah we r good
//how it works!!

Promise.all([p1,p2,]).then(()=>{
    console.log("all are done");
})