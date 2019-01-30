/***********************************************************
 *
 * Execution      :Default node    cmd>node StringReplace.js
 * Purpose        :Replace String Template "Hello <<UserName>>, How are you?"with proper username
 * 
 *@description 
 * 
 *
 *@file          :StringReplace.js
 *@overview      :StringReplace takes the userinput and print it with some sentence.    
 *@author name   :Shreenidhi Shamra N <shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@purpose       :stringReplace
 *@since         :24/01/2019
 * 
 ***********************************************************/

var random=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var read=require('readline-sync');
var username=read.question("enter the name ");
/**
 * Taking the user input.
 */
random.replaceString(username);//Invoking the stringReplace function.