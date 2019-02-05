/***********************************************************
 *
 * Execution      :Default node    cmd>node harmonic.js
 * Purpose        :To print harmonic number value.
 * 
 *@description 
 * 
 *
 *@file          :harmonic.js
 *@overview      :Harmonic takes the userinput and prints the Nth harmonic value.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/
var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync')

var number=readline.question("enter the number= ");
/**
 * Taking the user input.
 */
Utility.findHarmonic(number);
