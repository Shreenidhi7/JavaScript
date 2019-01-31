/***********************************************************
 *
 * Execution      :Default node    cmd>node qudratic.js
 * Purpose        :To find the roots of the equations.
 * 
 *@description 
 * 
 *
 *@file          :qudratic.js
 *@overview      :Qudratic takes the userinput and prints the roots of the equations.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmial.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/
var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var read=require('readline-sync');
var a= read.question("enter value of a= ");
var b= read.question("enter value of b= ");
var c= read.question("enter value of c= ");
/**
 * Taking the user input.
 */

num.findQuadratic(a,b,c);//Invoking the Quadratic function.