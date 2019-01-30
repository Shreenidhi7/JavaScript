/***********************************************************
 *
 * Execution      :Default node    cmd>node vendingMachine.js
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
var input=require("readline-sync");

var number=input.question("enter the integer number= ");

var str=num.toBinary(number);

console.log(str);