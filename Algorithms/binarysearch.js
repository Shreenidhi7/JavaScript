var num=require('../Utility/Utility');
var input=require('readline-sync');
 var words=input.question("enter the word to be searched= ");
 var file=require('fs');
 var arr=[];
 file.readFile('text.txt',(err,data)=>
 {
     if(err)
     throw err;
     arr=data.toString().split(" ");
     console.log(num.doBinarySearch(arr,words));
 })
