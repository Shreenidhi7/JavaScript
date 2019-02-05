/***********************************************************
 *
 * Execution      :Default node    cmd>node primefactors.js
 * Purpose        :To print primeFactors number.
 * 
 *@description 
 * 
 *
 *@file          :primefactors.js
 *@overview      :primeFactors takes the userinput and prints the prime factors nubers.    
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

var number=readline.question("enter number= ");
/**
 * Taking the user input.
 */
Utility.printPrimeFactors(number);//Invoking the primeFactors function.