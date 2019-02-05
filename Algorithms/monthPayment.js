/***********************************************************
 *
 * Execution      :Default node    cmd>node monthpay.js
 * Purpose        :Calculates the monthly payments using formula how much the pay off principal amount should 
 *                 be paid monthly.
 *@description 
 * 
 *
 *@file          :monthpay.js
 *@overview      :monthlyPayment takes the user input command  Principal,rate,Years to calculate the monthly payment using formula.    
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

var principal=process.argv[2];
var year=process.argv[3];
var rate=process.argv[4];

var amount=Utility.monthPayment(principal,year,rate)

console.log(amount);//Invoking monthlyPayment function.

