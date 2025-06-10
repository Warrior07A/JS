//ASYNC AWAIT AND I/O HEAVY OPERATIONS 

//ASYNC CODE
console.log("hi there");
console.log("hi there2");
setTimeout(()=>{                             //setTIMEOUT...SETINTERVL ARE ALL ASYNC FUNCTIONS
    console.log("hello");                    //first all code goes to main stack and asyn code goes to side stack 
},0);                                         //thats why it goes to side and get executed at the last when all gets done
console.log("hi there3");
console.log("hi there4");

//I/0 HEAVY OPERATIONS
        //Refers to the task in the computer system that involves a lot of data transfer between the program and external 
        //software
        //eg importing videos from file manager to adobe premier pro!
        //these operations require wwaiting for the data to be read or written to sources


        //CPU BOUND TASKS ->>  SYNCH
        //I/O HEAVY TASKS ->>  ASYNCH
const fs=require("fs");                   //it is an async task 
 //I/O HEAVY TASK                                           //but we can run it Sync as well just like here
const content=fs.readFileSync("hi.txt","utf-8");  //in asks OS to let it read hi.txt but is dependent on its answer whether
console.log(content);                             //and when it will receive 
                                                // the threead is free until then    
                                            //hence does the below task in meantime

let sum=0;                                     //CPU HEAVY TASK          
for (let i=0;i<10000;i++){                    
    sum+=i;
}

console.log(sum);



//CPU BOUND TASKS

           // CPU-bound tasks are operations that are limited by the speed and power of the CPU. 
            //These tasks require significant computation and processing power,
          //  meaning that the performance bottleneck is the CPU itself
          ///FOR E.G RUNNNING CONTINUOUSLY FOR 3 MILES


//I/O BOUND TASKS

       // I/O-bound tasks are operations that are limited by the system’s input/output capabilities, 
       // such as disk I/O, network I/O, or any other form of data transfer. 
       // These tasks spend most of their time waiting for I/O operations to complete.
    

//FOR Stylized theory visite "https://projects.100xdevs.com/tracks/async-js-1/Asynchronous-Javascript--Callbacks-and-more-1"

//Synchronosly doing tasks one by one
const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");                           ///first u run
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");                          //after completing a.txt b.txt run
console.log(contents2);

const contents3 = fs.readFileSync("b.txt", "utf-8");                          //then b.txt run once again
console.log(contents3);


//Asynchronous doing tasks(all together)

const fs = require("fs");                                       //who's calling these fn? => OS on your machine!

fs.readFile("a.txt", "utf-8", function (err, contents) {                             //saare ek saaath run hoga
  console.log(contents);                                                        //jiska output pehle aa gya
});                                                                           //uske print kar do

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});



//FUNCTIONAL ARGUMENTS                          edit: It is also called CALLBACK  :))

function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(doOperation(1, 2, sum))                     ///I underatand this more as a callback i.e. calling another fn iin a fn

//CALLBACK
        //callback mein 1st argument is always an error 
        //                2nd is content

function(error,content){                   //if used as a callback 
    console.error(error);
    console.log(content);
}


//UNDESTANDING ASYNC A BIT MORE DEEP
//JS ARCHITECTURE                                                                    //JS IS SINGLE THREADED LANG

setTimeout(() => {
    console.log("hi there");    
}, 1000);                                   //THough it has to run after 1 sec but
let ans=0;                      
for (let i=0;i<100000000000;i++){                 //until this loop doesn't get over
    ans+=i;                                              //async fn wont come out of side stack
}                                                   //settimeput will wait for the ans and then run it!
console.log(ans);

//CHECKOUT "http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"
//for understanding how Event Loop/SideStakc/MainStack really works well!!
 