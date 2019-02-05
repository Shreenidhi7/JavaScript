/***********************************************************
 *
 * Execution      :Default node    cmd>node coupon.js
 * Purpose        :To generate the coupon number using math.rondom.
 *@description 
 * 
 *
 *@file          :coupon.js
 *@overview      :couponNumber takes the userinput to generate the couponNumber which is unique.    
 *@author name   :Shreenidhi Sharma N<shreenidhisharma7@gmail.com>
 *@version       :1.0
 *@since         :25/01/2019
 * 
 ***********************************************************/

 var Utility=require('../Utility/Utility');
 /**
 * For accessing data from utility file.
 */
var readline=require('readline-sync');

var coupannumber=readline.question("enter coupans needed? ");
Utility.generateCoupons(coupannumber);//Invoking the Coupon function.
