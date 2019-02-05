/***********************************************************
 *
 * Execution      :Default node    cmd>node gambler.js
 * Purpose        :Print Number of Wins and Percentage of Win and Loss.
 *@description 
 * 
 *
 *@file          :gambler.js
 *@overview      :Gambler takes the userinputs and keeps track of the number of times he/she wins and the number of bets he/she makes    
 *@author name   :Shreenidhi Shamra N<shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/

var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');

var stake=readline.question("enter stake value= ");
var goal=readline.question("enter goal value= ");
var numberoftimes=readline.question("enter nor of times=");

Utility.doGamble(stake,goal,numberoftimes);//Invoking gambler function.
