var D=require('../Utility/UtilDataStructures');
var d=new D.Dequeue;
var read=require('readline-sync');
var word=read.question("enter the word:");
var arr=word.split(" ");

for(let i=0;i<arr.length;i++)
  {
    d.addFront(arr[i])
  }
var st=" ";
 for(let i=0;i<arr.length;i++)
  {
    st=st+d.removeFront();
  }
for(let i=0;i<arr.length;i++)
  {
    d.addFront(arr[i])
  }
  
var st1=" ";
for(let i=0;i<arr.length;i++)
  {
    st1=st1+d.removeRear();
  }
 if(st==st1)
  {
    console.log("word is palindrome");
  }
 else
  {
    console.log("word is not palindrome")
  }
