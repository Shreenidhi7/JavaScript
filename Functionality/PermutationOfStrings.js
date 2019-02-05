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






var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');

var string=readline.question("enter the string= ");
/**
 * Taking the user input.
 */


var results=Utility.stringPermutations(string);//Invoking the permutation of strings function.

console.log(results);
