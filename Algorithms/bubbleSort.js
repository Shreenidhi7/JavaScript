/***********************************************************
 *
 * Execution      :Default node    cmd>node bubblesort.js
 * Purpose        :To generate the prime number in the given range.
 *@description 
 * 
 *
 *@file          :bubbleSort.js
 *@overview      :bubbleSort takes the array size user input and sort the integers using bubble sort method.    
 *@author name   : Shreenidhi Sharma N<shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/

var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');

var inputArray=[];
var size=readline.question("enter the size");
var i;

for( i=0;i<size;i++)
{
    inputArray.push(readline.questionInt("enter elements"));
}
console.log("before sorting")
console.log(inputArray);
//alert(inputArray(','));
Utility.generateBubbleSort(inputArray);//Invoking bubbleSort function.
