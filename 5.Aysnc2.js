//sync and async kya hota h?
//sync => after end of work 1 only then work2 will begin

//async=> start all the work alltogether!
//jiska ans pehle aa jayega uska jawab tb de dena

//whenever u see these fn's, code is async
//setTimeout/setiNTERVAL/promise/fetch/axios/XMLHttpRequst

//setTimeout|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  //callback is always a fn and add time after which u wanna run it
setTimeout(callback,timeinms);
setTimeout(()=>{
    console.log("hi there after 1 s");
},1000);

//js is single threaded language
//jab main stack khali hota h tabhi side stack ko check kraa jata h!
//EventLoop side stack se mein stack mein code ko leke aata h 

//request senders..                     //request accepters..
//fetch                                 //then catch
//axios                                 //callbacks
//promises.                             //async await
//settimeout                            
//setinterval


 //getting a bit idea of what proomise is and how it works!
 //suppose i promise ki mein kal picnic jaunga
//  but mein jaunga (resolve) ya nhi jaunga(reject) 
// ye toh kal hi pta chalgea
//so promises are primarily in 3 states
// pending.............resolve.......reject

// if done => then
// if not done => catch

                  //takes a fn 
var ans=new Promise((res,rej)=>{
    if (true){
        return res();
    }else {
        return rej();
    }
})
 
ans
.then(function(){                   
    console.log("resolve ho gya")
})
.catch (function(){
    console.log("reject ho gya");
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
///user will ask a no from 0 to 9 if no is smaller than 5 then resolve otherwise reject

 var no=new Promise((res,rej)=>{
  var n=Math.floor(Math.random()*10);     //math.random generates rand. no. and math.floor rounds to nearest integer
  console.log(n);
  if (n<5){
    return res();
  }
  if (n>5)
  {
    return rej();
  }
})

no
.then(function(){
  console.log("no is below 5");
})
.catch(function(){
  console.log("no is above 5");
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//doing promise Chaining(doing one task after another more like synch but inside a promise)
//DO TASK1=> TASK2  => TASK 3 => TASKK4 
//LIKE THAT


 var ans=new Promise((res,rej)=>{                      //suppose all are just returning only
   return res("TASK1");                               //res ke andar ka goes to ans and hence saves to fn of ans i.e. data
 })

 var p2=ans.
         then(function(data){
           console.log(data);
           return new Promise(function(res,rej){      //promise is in ans and get returned to p2 !
             return res("TASK 2");                    ///returning to promise
          })
        })

var p3=p2.then(function(data){                         //p2 get resolved and gets the data and then logs it
  console.log(data);                                   ///and it continues................
return new Promise((res,rej) =>{                       //either write fn outside bracket or use arrow fn
    return res("task3");
})
})

var p4=p3.then(function(data){
  console.log(data);
  return new Promise((res,rej)=>{
    return res("TASK4");
  })
})

p4.then(function(data){
    console.log(data);

})


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//ASYNC AWAIT            USE AND WHY PREFERRED OVER THEN AND CATCH
// /WHENEVER WE USE ASYNC CODE WE USE PROMISES  =>=> (THEN AND CATCH ) ..... TO AVOID (THen and catch) WE USE ASYNC AWAIT 
 
async function abcd(){
  var blob=await fetch('https://randomuser.me/api/');  //awaiting for fetch to bring data
  var ans=await blob.json();                            //await is always required with similar data
  console.log(ans);
}

abcd();
