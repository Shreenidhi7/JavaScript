/***********************************************************
 *
 * Execution      :Default node    cmd>node PermutationOfStrings.js
 * Purpose        :takes the input and gives the permutations of the input as the output
 * 
 *@description 
 * 
 *
 *@file          :PermutationOfStrings.js
 *@overview      :permutations of the input is obtained   
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/






var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');

var string=input.question("enter the string= ");
/**
 * Taking the user input.
 */


var results=num.stringPermutations(string);//Invoking the permutation of strings function.

console.log(results);
