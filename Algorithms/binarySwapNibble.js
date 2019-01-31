/******************************************************************************
 *  Execution      :   1. default node          : cmd> binarySwapNibble.js
 *                     2. if nodemon installed  : cmd> binarySwapNibble.js
 * 
 *  Purpose        : To swap half of the length of binary digits
 *          
 * 
 *  @file          : binarySwapNibble.js
 *  @overview      : To read an integer as an Input, convert to Binary using toBinary function and perform the following functions. 
                        i.Swap nibbles and find the new number. 
 *  @author        : Shreenidhi Sharma N <shreenidhisharma7@gmail.com>
 *  @version       : 1.0
 *  @since         : 29/01/2019
 *
 ******************************************************************************/
var path = require('../Utility/Utility');
var read = require('readline-sync');

var num=read.question("enter the number= ");

 var result=path.binarySwapNibble(num);

 console.log(result);

