const fs=require('fs');  //need to use filsystem library inbuild in nodee

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

fs.writeFile("hi.txt","hello!", function(error){    ///creates a new file hi.txt ,then content ,and finnallu callback->function
    if (error) console.error(error); //prints error
    else console.log("ALL DONE MAST CHAKACGAK");
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


fs.appendFile("hi.txt","kese ho?", function(error){ //append to the current file 
    if (error) console.log("kaam kharab ho gya"); 
    else console.log("ALL DONE MAST CHAKACGAK");
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

           //old path   //new path   //error as an argument
fs.rename("hi.txt","hi.js",function (error){
    if (error)  console.error(error);
    else   console.log("all done");
})


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

           //to be copied   //locationand new name 
fs.copyFile("hi.js","./copyfolder/copy.txt",function(error){
    if (error) console.error(error.message);    //shows error mssg if no such copyfolder exists in current folder
    else console.log("alll seettt");             
})


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//deletes "hi.txt"
 
fs.unlink("hi.txt",function(err){
    if(err) console.log(err);
    else  console.log("unlinked successfully");
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//removing folders
//  path of folder       recursive means repeating the operation until done 
fs.rm(path,{recursive:true},function(err){
    if(err) console.log(err);
    else  console.log("folder deleted successfully");
});