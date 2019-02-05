/*var UtilityDS=require('../Utility/UtilityDS');
var Dequeue=new UtilityDS.Dequeue;
var read=require('readline-sync');
var word=read.question("enter the word:");
var arr=word.split(" ");
var st1=" ";
for(let i=0;i<arr.length;i++)
  {
    Dequeue.addFront(arr[i])
  }
/*var st=" ";
 for(let i=0;i<arr.length;i++)
  {
    st=st+Dequeue.removeFront();
  }
for(let i=0;i<arr.length;i++)
  {
    Dequeue.addRear(arr[i])
  }
  */
/*
for(let i=0;i<arr.length;i++)
  {
    st1=st1+Dequeue.removeFront();
  }
  console.log(st1);
 // console.log(st);
  
 if(word == st1)
  {
    console.log("word is palindrome");
  }
 else
  {
    console.log("word is not palindrome")
  }

  */


  /************************************************************************
 * Execution :   default node : cmd> node palindromeChecker.js
 *              
 * Purpose   :   The solution to this problem will use a deque to store the characters of the string.
 *               We will process the string from left to right and add each character to the rear of the deque. 
 * 
 * @description
 * @file     :   palindromeChecker.js
 * @overview :   A palindrome is a string that reads the same forward and backward, We would like to construct 
 *               an algorithm to input a string of characters and check whether it is a palindrome.

 * @author   :   Vishal C  <iamvishal96@gmail.com>
 * @version  :   1.0
 * @since    :   02/02/2019

 **************************************************************************/
var UtilityDs = require('../Utility/UtilityDS');
var Utility = require('../Utility/Utility');
var readline = require('readline-sync');
function check()
{
var d = new UtilityDs.Dequeue;
var word = readline.question("Enter the word :");
var result=d.isPalindrome(word);
if(result==false)
{
    console.log("String is not a palindrome");
}
else
{
    console.log("String is a palindrome");
}
}
check();