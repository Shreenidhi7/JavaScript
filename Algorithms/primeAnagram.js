/***********************************************************
 *
 * Execution      :Default node    cmd>node primeAnagram.js
 * Purpose        :To generate the prime and anagram in the given range.
 *@description 
 * 
 *
 *@file          :primeAnagram.js
 *@overview      :PrimeAnagram takes the userinput range to generate the prime and anagram numbers.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/


var read=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');

var result=read.AnagramPrime();//Invoking the Anagramprime function.
console.log(result)