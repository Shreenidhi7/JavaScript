var readline=require('readline-sync');

var access=require('../Utility/Utility');

var accessDs=require('../Utility/UtilDataStructures');

var arr1=access.fileRead();
var arr=[];
for(let i=0;i<arr1.length;i++)
{
    arr[i]=parseInt(arr1[i])
}
access.mergeSort(arr)

var linkedlist= new accessDs.LinkedList();

for(let i=0;i<arr1.length;i++)
{
    linkedlist.add(arr[i]);
}

var contents=linkedlist.print();
console.log("data in list: "+contents);
var valid=false;

do
 {
  var number=readline.question("enter the number: ");
    if(isNaN(number))
     {
       console.log("not a valid entry,enter only numbers")
     }
    else
     {
    valid=true;
     }
}
while(!valid);

var result=linkedlist.search(number);
console.log("number in the list: "+result);

if(result === true)
{
    console.log(linkedlist.remove(number));

    var output=linkedlist.print();
    access.fileWrite('nidhi.txt',output)
    console.log("removed the number from the list since its already present");
    console.log("new data: "+output);
}
else
{
    var position=linkedlist.addpos(arr,number);
    linkedlist.insertAt(number,position);
    var output1=linkedlist.print();

    access.fileWrite('nidhi.txt',output1);
    console.log("word added successfully");
    console.log("new data"+ output1);
}

