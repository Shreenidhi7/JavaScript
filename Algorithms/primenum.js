/***********************************************************
 *
 * Execution      :Default node    cmd>node primenum.js
 * Purpose        :To generate the prime number in the given range.
 *@description 
 * 
 *
 *@file          :primenum.js
 *@overview      :isPrime takes the userinput range to generate the prime numbers.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :27/01/2019
 * 
 ***********************************************************/
var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');

var initial=input.question("enter input range= ");//for entering the initial value.
var final=input.question("enter output range= ");//for entering the final value.

var res=num.isPrime(initial,final);//Invoking the generatePrimeno function.

console.log(res);