/***********************************************************
 *
 * Execution      :Default node    cmd>node leapyear.js
 * Purpose        :To find the leap yaer
 * 
 *@description 
 * 
 *
 *@file          :leapyear.js
 *@overview      :leapYear takes the userinput and print weather it is leap year or not..    
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

var year=readline.question("enter the year ");
/**
 * Taking the user input.
 */

Utility.leapYear(year);//Invoking the leapyear function.