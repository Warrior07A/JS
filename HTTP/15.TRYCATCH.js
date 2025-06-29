// TRY CATCH    
//  if yu would run this code it wont print LINE 8 Since it encountered an error before

let a;
console.log(a.length);
console.log("hi there")
console.log("give me hook");            //this line won't run if error came above it!


//programmers put the code they think are vulnerable to errors in (TRY CATCH BLOck) e.g.   jwt.verify like

try{
    let a;
    console.log(a.length)
}catch(e){
    console.log("ERROR IS CAUGHT!")          //this wiill run since error gets generated above it !
}
console.log("give me hook");