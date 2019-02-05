/***********************************************************
 *
 * Execution      :Default node    cmd>node powerof2.js
 * Purpose        : To find the power table of 2.
 *@description 
 * 
 *
 *@file          :powerof2.js
 *@overview      :powerOf2 takes the user input command to print power table of 2.    
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

var power =readline.question("enter the exponent");

Utility.findExponentialOf2(power);//Invoking the power function.