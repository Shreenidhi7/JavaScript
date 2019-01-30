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





var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');

var str=input.question("enter the input= ");
var result=num.findPalindrome(str);//Invoking the isPalindrome function.
console.log(result);