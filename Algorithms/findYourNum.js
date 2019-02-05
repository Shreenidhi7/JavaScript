/***********************************************************
 *
 * Execution      :Default node    cmd>node findYourNUm.js
 * Purpose        : To guess the number  
 *@description 
 * 
 *
 *@file          :findYourNum.js
 *@overview      :Giving the range of numbers to User and making them to select a number in 
                    that range and to guess the number    
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
var n=process.argv[2];//accepting the input from user in command line arguements

var res=Utility.toFindNumber(0,n-1,readline);

console.log("the number is= "+res);//Invoking the toFindNumber function.