/***********************************************************
 *
 * Execution      :Default node    cmd>node distance.js
 * Purpose        : To find the distance from the point(x,y).
 *@description 
 * 
 *
 *@file          :distance.js
 *@overview      :Distance takes the user input command to calculate the distance between point(x,y).   
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :24/01/2019
 * 
 ***********************************************************/

var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var result1=process.argv[2];
var result2=process.argv[3];
Utility.findEuclidistance(result1,result2);//Invoking the Distance function.
