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

//forEach function

var arr=[1,2,3,4];
arr.forEach(function(val){              //access every elemnt of an array one by one.
    console.log(val+"hello");           //1hello ...2hello...3hello...4hello...
})


//map        (works on arrays) and gives a new array
const input=[1,2,3,4];
function transform(i){
    return (i*2);
}
const ans=input.map(transform);
console.log(ans);                                   //output: [2,4,6,8]


//filter
//It filters out elements from an array based on some logic

const arr2=[1,2,3,4];
function filterLog(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const ans2=array.filter(filterLog);              //[2,4]


//find
//finds the element at the first occurence
const arr3=[1,2,3,4];
var ans4=arr3.find(function(val){
    if (val==2) return val;
})
console.log(ans4);


//indexOf
const arr4=[1,2,3,4];
arr4.indexOf(element)             //directly put whatver u have to find; let it be a no or value;directly replce with element
                                   //retuns(-1) if not found or returns first occrrence

                                   