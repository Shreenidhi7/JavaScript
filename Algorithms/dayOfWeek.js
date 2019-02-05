/***********************************************************
 *
 * Execution      :Default node    cmd>node dayofWeek.js
 * Purpose        : To find the day of week using by formula and 
 *                  taking command line arguments inputs.
 *@description 
 * 
 *
 *@file          :dayofWeek.js
 *@overview      :DayofWeek takes the  command line arguments inputs from the user and finds out day of the week using formula.    
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

var day=Number(process.argv[2]);
var month=Number(process.argv[3]);
var year=Number(process.argv[4]);

var res=Utility.findDay(day,month,year);

console.log(res);//Invoking bubbleSort function.