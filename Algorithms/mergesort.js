var num=require('../Utility/Utility');
var input=require('readline-sync');

var arr=[];
var size=input.question("enter the size");

for(let i=0;i<size;i++)
{
  arr.push(input.questionInt("enter the elements"));  
}
console.log("before sorting= ");
console.log(arr);

num.sortmerge(arr);
