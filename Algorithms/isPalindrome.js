/***********************************************************
 *
 * Execution      :Default node    cmd>node ispalindrome.js
 * Purpose        :To generate the reverse of the given input.
 *@description 
 * 
 *
 *@file          :ispalindrome.js
 *@overview      :ispalindrome takes the userinput range and reverses the input.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gamil.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/





var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');

var str=readline.question("enter the input= ");
var result=Utility.findPalindrome(str);//Invoking the isPalindrome function.
console.log(result);