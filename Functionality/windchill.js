/***********************************************************
 *
 * Execution      :Default node    cmd>node windchill.js
 * Purpose        :To find the roots of the equations.
 * 
 *@description 
 * 
 *
 *@file          :windchill.js
 *@overview      :windChill takes the userinput commands and computes the wind chill .    
 *@author name   :Shreenidhi Sharma N<shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/
var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');

var temp=input.question("enter the temperature");


while((Math.abs(temp)>50)) 
{
    console.log("enter temperature between -50 and 50");
    var temp=input.question("enter the temperature");
   

}
var speed=input.question("enter the speed");
if(!(speed<120 && speed>3))
{
    console.log("enter speed between 3 and 120");
    var speed=input.question("enter the speed");

}
num.findChillwind(temp,speed);//Invoking the windChill function.