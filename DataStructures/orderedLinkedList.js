var readline=require('readline-sync');
var Utility=require('../Utility/Utility');
var UtilityDS=require('../Utility/UtilityDS');
var arr1=Utility.fileRead("nidhi.txt");
console.log("before sort "+arr1);
 var arr=[];

for(let i=0;i<arr1.length;i++)
{
    arr[i]=parseInt(arr1[i]);

} 
arr.sort();
//Utility.mergeSort(arr);
console.log("after sorting"+arr);

var linkedlist= new UtilityDS.LinkedList();

for(let i=0;i<arr.length;i++)
{
    linkedlist.add(arr[i]);
}
//console.log(linkedlist);

var contents=linkedlist.print();
console.log("data in list: "+contents);
var valid=false;

do
{
var number=readline.question("enter the number: ")
if(isNaN(number))
{
    console.log("not a valid entry,enter only numbers");
}
else
  {
    valid=true;
  }
}

while(!valid);

var result=linkedlist.search(number);
console.log("number in the list: "+result);

if(result ===true)
{
    console.log(linkedlist.remove(number));

    var output=linkedlist.print();
    Utility.fileWrite('nidhi.txt',output)
  //  console.log("remove the number from the list since its already present");
    console.log("new data is: "+output);
}
else
{
    var position=linkedlist.addpos(arr1,number);
    linkedlist.insertAt(number,position);
    var output1=linkedlist.print();

    Utility.fileWrite('nidhi.txt',output1);
    console.log("word added successfully");
    console.log("new data"+ output1);
}

