// for loop
for (let i=0;i<5;i++) {   //3 arguments (basic syntax [for loop] )
    console.log(i);          //console always adds a new line to next answer                  comment...
    process.stdout.write(i+ ' ') //used to print i in the same line                           any one of them
}



//functions
function sum(a,b){
    return (a+b);
}
console.log(sum(100,100));


//arrow function
sum=(a,b) => {
    return(a+b);
}
console.log(sum(100,100));


//Finding index of a number in an array 
function fodo(arr,target){
    for (let i=0;i<arr.length;i++){
        if (arr[i]==target) console.log(i);
    }
}
arr=[1,2,3,4,5];
fodo(arr,5);