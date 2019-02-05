/***********************************************************
 *
 * Execution      :Default node    cmd>node coinflip.js
 * Purpose        :To find the percentage of coins fliped heads and tails.
 * 
 *@description 
 * 
 *
 *@file          :coinflip.js
 *@overview      :Sum the number of times the count of heads and tails,calculate the percentage..    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@purpose       :stringReplace
 *@since         :24/01/2019
 * 
 ***********************************************************/

var Utility=require('../Utility/Utility');
var readline=require('readline-sync');

var number=readline.question("enter the number ");
Utility.flipCoin(number);//Invoking the flipcoin function.