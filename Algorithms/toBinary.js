/***********************************************************
 *
 * Execution      :Default node    cmd>node toBinary.js
 * Purpose        :Given the integer number from the input and convert it to binary
 *@description 
 * 
 *
 *@file          :toBinary.js
 *@overview      :Taking the input from the user and converting it into binary numbers
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :28/01/2019
 * 
 ***********************************************************/



var num=require("../Utility/Utility");
/**
 * For accessing data from utility file.
 */
var input=require("readline-sync");

var number=input.question("enter the integer number= ");

var str=num.toBinary(number);//Invoking the toBinary function.


console.log(str);