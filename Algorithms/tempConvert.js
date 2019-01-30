/***********************************************************
 *
 * Execution      :Default node    cmd>node tempconvert.js
 * Purpose        :Conversion of temperature to fahrenheit and Celsius.
 *@description 
 * 
 *
 *@file          :tempconvert.js
 *@overview      :temperatureConversion takes the user input choice to convert the temperature to fahrenheit and Celsius.    
 *@author name   :Shreenidhi Sharma N<shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :28/01/2019
 * 
 ***********************************************************/

var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');

var result=num.tempConversion(input);//Invoking temperatureConversion function method.
