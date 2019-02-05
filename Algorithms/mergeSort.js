/***********************************************************
 *
 * Execution      :Default node    cmd>node mergeSort.js
 * Purpose        :To sort the string using merge sort method.
 *@description 
 * 
 *
 *@file          :mergeSort.js
 *@overview      :mergeSort takes the user input string and the sort them using mergeSort method.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :28/01/2019
 * 
 ***********************************************************/

var Utility=require('../Utility/Utility');
var readline=require('readline-sync');

var arr=[];
var size=readline.question("enter the size= ");

for(let i=0;i<size;i++)
{
  arr.push(readline.questionInt("enter the elements= "));  
}
console.log("before sorting= ");
console.log(arr);

var result=Utility.mergeSort(arr);
console.log("after sorting= ");
console.log(result);