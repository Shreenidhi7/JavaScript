/***********************************************************
 *
 * Execution      :Default node    cmd>node triplets.js
 * Purpose        :Prints all triplets in array with 0 sum.
 * 
 *@description 
 * 
 *
 *@file          :findTriplets.js
 *@overview      :findTriplets takes the userinput find three elements whose sum is equal to zero .    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/

var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var read=require('readline-sync');
var number=read.question("enter the size of an array");
/**
 * Take the user input for declaring the array size.
 */
var arr=[];
for(let i=0;i<=number;i++)
{
    var numbers=read.question("enter the elements");
    arr.push(numbers);
}
num.findTriplet(number,arr);//Invoking findtriplets function
