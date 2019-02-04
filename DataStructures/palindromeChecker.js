var UtilityDS=require('../Utility/UtilityDS');
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