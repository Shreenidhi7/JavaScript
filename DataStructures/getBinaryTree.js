var UtilityDs=require('../Utility/UtilityDS');
var Utility=require('../Utility/Utility');
var read=require('readline-sync');
var number=read.questionFloat("enter the number= ");

var factorial=UtilityDs.getBinaryTree(number);
var factorial1=UtilityDs.getBinaryTree(number*2);
var factorial2=UtilityDs.getBinaryTree(number+1);

var result=(factorial1)/(factorial2*factorial);
console.log(result);