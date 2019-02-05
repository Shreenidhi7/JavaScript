/***********************************************************
 *
 * Execution      :Default node    cmd>node vendingMachine.js
 * Purpose        :given the denomination and given an amount,using the logic we can denote whats the 
 *                  denominations of notes for a given number
 *@description 
 * 
 *
 *@file          :vendingMachine.js
 *@overview      :Taking the input from the user and given them the denomination of notes
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :28/01/2019
 * 
 ***********************************************************/


var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');
var amount=readline.question("enter the amount= ");
Utility.calculateNotes(amount);//Invoking the vendingMachine function.
