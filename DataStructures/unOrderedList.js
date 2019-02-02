/*var num=require('../Utility/UtilDataStructures');
var l=new num.LinkedList();
l.add("abc");
l.add("bcd");
l.add("cde");  
//console.log(l);
l.print();
//console.log(l);
var res=l.getSize();
console.log(res);

//var arr=[];
//l.addpos(arr,2);

var result=l.insertFirst(1);
console.log(result);

//console.log(arr.length)

l.remove("bcd");
l.print();
*/
var num=require('../Utility/Utility');
var access=require('../Utility/UtilDataStructures');

var read=require('readline-sync');
var word=read.question("enter word to be searched in file:")


var arr=num.fileRead("shri.txt");

var l=new access.LinkedList();

for(let i=0;i<arr.length;i++)
    {
     l.add(arr[i]);
    }


var found=l.search(word);
if(found==true)
{
    l.remove(word);
    var output=l.print();
    num.fileWrite('shri.txt',output);
    console.log(output)
}
else
{
    l.add(word)
    var out=l.print();
    num.fileWrite('shri.txt',out);
    console.log(out)
}

