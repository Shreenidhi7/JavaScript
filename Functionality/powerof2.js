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
var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var read=require('readline-sync');

var power =read.question("enter the exponent");

num._2exponential(power);//Invoking the power function.