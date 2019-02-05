/***********************************************************
 *
 * Execution      :Default node    cmd>node stopwatch.js
 * Purpose        :Is to calculate the time elapsed betweem the start and stop.
 * 
 *@description 
 * 
 *
 *@file          :stopwatch.js
 *@overview      :stopWatch takes the userinput measure the elapsed time between start and end.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/
var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');

Utility.stopWatch(readline);//Invoking readTime function
