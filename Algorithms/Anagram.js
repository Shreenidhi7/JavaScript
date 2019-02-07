/***********************************************************
 *
 * Execution      :Default node    cmd>node Anagram.js
 * Purpose        :function to check whether two strings are anagram of each other.
 *@description 
 * 
 *
 *@file          :Anagram.js
 *@overview      :Anagram takes 2 string   userinput to check that given string is anagram or nots.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');
var str1=readline.question("enter string1");
var str2=readline.question("enter string2");
/**
 * Accepting the user inputs.
 */
var result=Utility.isAnagram(str1,str2);//Invoking the Anagram function.

console.log(result);