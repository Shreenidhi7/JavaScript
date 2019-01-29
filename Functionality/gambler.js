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

var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var read=require('readline-sync');

var stake=read.question("enter stake value= ");
var goal=read.question("enter goal value= ");
var numberoftimes=read.question("enter nor of times=");

num.Gambling(stake,goal,numberoftimes);//Invoking gambler function.
