/*******************************************************************
 * 
 *Execution      :Default node    cmd>node squareroot.js 
 * Purpose       :To compute the square root of a nonnegative number
 * @description
 * 
 * 
 * 
 * @file         :squareroot.js
 * @overview     :Given the input,by calculating using the given formulae 
 *                the square root of the number is obtained
 * @author name  :Shreenidhi Sharma N  <shreenidhisharma7@gamil.com>
 * @version      :1.0
 * @since        :28/01/2019  
 * 
 *
 ************************************************************************/

var num=require('../Utility/Utility');
/**
 * For accessing data from utility file.
 */
var input=require('readline-sync');

var number=input.question("enter the number= ");// enter the number..

var result=num.findSquareRoot(number);//Invoking temperatureConversion function method.