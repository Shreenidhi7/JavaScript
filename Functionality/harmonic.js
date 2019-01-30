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
var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var read=require('readline-sync')

var number=read.question("enter the number= ");
/**
 * Taking the user input.
 */
num.findHarmonic(number);
