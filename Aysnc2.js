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

var ans=new Promise((res,rej){
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