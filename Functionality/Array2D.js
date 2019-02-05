/***********************************************************
 *
 * Execution      :Default node    cmd>node Array2D.js
 * Purpose        :To display the array elements in the array.
 *@description 
 * 
 *
 *@file          :Array2D.js
 *@overview      :creatArray takes the userinput and display the elements in array.    
 *@author name   :Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/
var Utility=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var read=require("readline-sync");

var rows=read.question("enter number of rows");
/**
 * Taking the user input to enter number of rows.
 */
var columns=read.question("enter number of columns");
/**
 * Taking the user input to enter number of cols.
 */

Utility.TwoDimensionalArray(rows,columns,read);//Invoking the createArray function.
