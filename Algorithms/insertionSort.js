/***********************************************************
 *
 * Execution      :Default node    cmd>node insertionsort.js
 * Purpose        :To sort the string using insertion sort method.
 *@description 
 * 
 *
 *@file          :insertionsort.js
 *@overview      :insertionSort takes the user input string and the sort them using insertion sort method.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :28/01/2019
 * 
 ***********************************************************/
var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');

var arr=[];
var size=readline.question("enter the size");

for(let i=0;i<size;i++)
{
    arr.push(readline.questionInt("enter the elements"));

}
console.log("before sorting");
console.log(arr);

Utility.generateInsertsort(arr);//Invoking insertionSort function.
