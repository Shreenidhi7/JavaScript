/***********************************************************
 *
 * Execution      :Default node    cmd>node binarySearch.js
 * Purpose        : To search a particular char,string,num in a given text
 *@description 
 * 
 *
 *@file          :binarySearch.js
 *@overview      : given an input and the value to be found using binary search    
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
 var words=readline.question("enter the word to be searched= ");
 var file=require('fs');
 var arr=[];
 file.readFile('text.txt',(err,data)=>
 {
     if(err)
     throw err;
     arr=data.toString().split(" ");
     console.log(Utility.doBinarySearch(arr,words));
 })
